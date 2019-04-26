$(function () {

    'use strict';

    $("html").niceScroll({
        cursorcolor: "#ff305b"
    });

/*Start Scroll*/ 

    $('.header li a').click(function () {

        $("html, body").animate({

            scrollTop: $('.' + $(this).data('value')).offset().top

        }, 1000); 
    });

/*End Scroll*/ 

    $('.home').height($(window).height());

    $(window).scroll(function () {
       
        if ($(this).scrollTop() >= 150) {
         
         $(".header").css("background", "rgba(20,20,20,0.7)");
         
        } else {
         
            $(".header").css("background", "transparent");
         
        }
     });



/* Start Auto Write*/ 
  var typer= $('.autotype').data('text'),

     typerlenth = typer.length,

      n=0,

     thetyper= setInterval(function(){
        
        $('.autotype').each(function (){

            $(this).html($(this).html() + typer[n]);

        });
        
        n +=1 ;

        if (n >= typerlenth) {

            clearInterval(thetyper);
        };

     },300);

/* End Auto Write*/

/*Start Portofolio*/

     $('.Portfolio ul li').click(function () {

        $(this).addClass("color").siblings().removeClass("color");

        if ($(this).data('class') === 'all') {

            $('.Portfolio .col-md-4').show(1000);

        } else {

            $('.Portfolio .col-md-4').hide();

            $($(this).data('class')).show(1000);

        }
     });

/*End Portofolio*/
/*Start Count*/
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        }); 
/*End Count*/


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }
      
    }
    
});

$(window).scroll(function () {

    if ($(this).scrollTop()>= 200) {

        $('.up').show();

    } else {

        $('.up').hide();
    }

});

$('.up').click(function () {

    $('html, body').animate({scrollTop: 0}, 1000);

});

});

$(window).on ('load',function() {
    // Animate loader off screen
    $(".sp-overlay").fadeOut(5000);
});