new WOW().init();
smoothScroll.init({
  speed: 1000,
  offset:60
});
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });
});
$(window).scroll(function () {
    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});
