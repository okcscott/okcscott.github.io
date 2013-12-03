$(document).ready(function() {
  $('a[href*="#"]').click(function(event) {
    event.preventDefault();
    var href = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 500);
  });

  if(!Modernizr.touch){ 
    $(window).scroll(function() {
      var headerHeight = $('#header').height();      
      var position = $(window).scrollTop();

      if(headerHeight > position) {
        var percentage = 100 - ((position/headerHeight) * 100)
        $('#header').css('background-position-y',(percentage+'%'));
      }
    })
  }

  $('#contact .show-contact').click(function() {
    $(this).fadeOut(500, function() {
      $("#contact form").fadeIn(500);  
    });    
  });

  $('#contact form').submit(function(event) {
    event.preventDefault();

    $.post("http://getsimpleform.com/messages?form_api_token=8587f661d45ab998b7251bb064764ec6", $(this).serialize()).always(function() {
      $("#contact form").fadeOut(500, function() {
        $("#contact h3").fadeIn(500);
      });
    });
  });
});