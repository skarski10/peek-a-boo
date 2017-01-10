$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").toggle();
  });

  $(".click").click(function() {
   $(".fadeIn").fadeToggle();
   $(".fadeOut").fadeToggle();
 });
});
