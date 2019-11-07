/* nav */
$(function() {
    $(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
    });
  });
  $(document).ready(function() {
    $(".img").mouseenter(function() {
      $(this).addClass("hover");
    })
  
    .mouseleave(function() {
      $(this).removeClass("hover");
    });
  
  });
/* end of nav */

/* slider */
$('#carouselFade').carousel();
/* end of slider */

/* activities portfolio */

/* end of activities portfolio */

/* friends and partners section */

/* end of friends and partners section */