$(document).ready(function() {
  $('#contact .show-contact').click(function() {
    $(this).fadeOut(500, function() {
      $("#contact form").fadeIn(500);  
    });    
  });

  $('#contact form').submit(function(event) {
    event.preventDefault();
    // url = "http://getsimpleform.com/messages?form_api_token=8587f661d45ab998b7251bb064764ec6";
    // name = $(this).find(".email-name").val();
    // message = $(this).find(".email-message").val();

    // console.log(name);
    // console.log(message);

    $.post("http://getsimpleform.com/messages?form_api_token=8587f661d45ab998b7251bb064764ec6", $(this).serialize()).always(function() {
      $("#contact form").fadeOut(500, function() {
        $("#contact h3").fadeIn(500);
      });
    });
  });
});