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

  $('#contact .show-contact').click(function() {
    $(this).fadeOut(500, function() {
      $("#contact form").fadeIn(500);
    });
  });
});
