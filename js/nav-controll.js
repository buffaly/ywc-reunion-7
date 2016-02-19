$(function () {
  $(".nav-bb-mobile").click(function() {
    $('.nav-menu').slideToggle();
  });

  $(window).resize(function() {
    if($(window).width() > 992) {
      $('.nav-menu').show();
    }
  });
});