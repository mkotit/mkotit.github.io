/*-----------------------------------------------------------
* Template Name    : 
* Author           : 
* Version          : 2.0.0
* Created          : February 2018
* File Description : 
*------------------------------------------------------------
*/


//scroll        
$(window).on('scroll',function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("stickyadd");
    } else {
        $(".sticky").removeClass("stickyadd");
    }
});

//Smooth
$(".navbar-nav a, .scroll_down a").on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

//ScrollSpy
$("#navbarCollapse").scrollspy({
    offset:20
});

$(window).on('scroll',function(){
    if ($(this).scrollTop() > 100) {
        $('.back_top').fadeIn();
    } else {
        $('.back_top').fadeOut();
    }
}); 
$('.back_top').on('click',function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});

//Client Slider
$("#owl-demo").owlCarousel({
    autoPlay: 7000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
});

