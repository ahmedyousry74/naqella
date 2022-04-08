$(document).ready(function() {

    //Preloader
    document.onreadystatechange = function() {
        if (document.readyState !== "complete") {
            document.querySelector(
              "body").style.visibility = "hidden";
            document.querySelector(
              ".preloader").style.visibility = "visible";
        } else {
            document.querySelector(
              ".preloader").style.display = "none";
            document.querySelector(
              "body").style.visibility = "visible";
        }
    }



    $('.owl-carousel.owl-testimonials').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    $('.owl-carousel.owl-customer').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })
    
     $('.owl-carousel.owl-property-details').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 2500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    //wow
    new WOW().init();

    

    //counter
    $('.num').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 6500,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    //  start scrollTop
    $(function(){
        var scrollbutton = $("#scroll");
        $(window).scroll(function(){
            if ( $(this).scrollTop()>=300)
            {
                scrollbutton.show();
            }
            else
            {
                scrollbutton.hide();
            }
        });
        scrollbutton.click(function(){
            $("html,body").animate({ scrollTop : 0 } , 1000);
        });
    }); 

});