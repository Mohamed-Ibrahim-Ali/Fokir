$(function () {

    'use strict';

    $("html").niceScroll({
        cursorcolor: "#2a80b9"
    });

    $(window).scroll(function () {
       
        if ($(this).scrollTop() >= 150) {
         
         $(".navbar").css("background", "rgba(20,20,20,0.7)");
         
        } else {
         
            $(".navbar").css("background", "transparent");
         
        }
     });

     /* Star Work */

     $(".work ul li").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        
        if ($(this).data('class') === 'all') {

            $(".shuffle .col-lg-4").show(1000);

        } else {
            $(".shuffle .col-lg-4").hide();

            $($(this).data('class')).show(1000);
        }

     });

     /* End Work */

     /* Start team owl-carousei */

     $('.team .owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    });

    /* End team owl-carousei */


    /* Start logos owl-carousei */

       var owl = $('.logos .owl-carousel');
            owl.owlCarousel({
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            });

            /* End logos owl-carousei */

            /* Start Up Animate */

            
            $(window).scroll(function () {
                
                if ($(this).scrollTop()>= 400) {
                    
                    $('.up').show();
                } else {
                    
                    $('.up').hide();
                }
                
            });
            
            $('.up').click(function () {
                
               $('html, body').animate({scrollTop: 0 });
               
            });

            $('.Nav li a').click(function () {

                console.log ($(this).data('value'));

                $("html, body").animate({

                    scrollTop: $('#' + $(this).data('value')).offset().top

                }, 1000); 
            });

            /* End Up Animate */



           $('.counter').counterUp({
                delay: 10,
                time: 3000
            }); 

            
    
});

$(window).on ('load',function() {
    // Animate loader off screen
    $(".sp-overlay").fadeOut(5000);
});