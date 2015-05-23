$(document).ready(function() {
  $('a[href*="#"]').click(function(event) {
    event.preventDefault();
    var href = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 500);
  });

  if (!Modernizr.svg) {
    $("img[src$='.svg']")
      .attr("src", fallback);
  }

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

    $.post("https://formkeep.com/f/74ad0e631f00", $(this).serialize()).always(function() {
      $("#contact form").fadeOut(500, function() {
        $("#contact h3").fadeIn(500);
      });
    });
  });
});