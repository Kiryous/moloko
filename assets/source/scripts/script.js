$(document).ready(function() {
  $(".fetch a").click(function() {
    setTimeout(function(){
      $(".grid-wrap .one").addClass("visible");
    }, 1000);
  });
});
