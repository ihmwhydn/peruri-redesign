$(document).ready(function(){

    $('.marquee').marquee({
        duration: 15000
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $("#tombol").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
     });

});