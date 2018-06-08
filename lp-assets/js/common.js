$(function() {

    $('.hamburger').click(function () {
        $(".hamburger").toggleClass('is-active');
        $("#nav").slideToggle().toggleClass("nav-active");

    });

    $(window).resize(function () {
        if ($(this).width() > 992) {
            $("#nav").addClass('nav-active');
            $("#nav").css('display','block');
            $('.humburher').addClass('is-active');

        }
        else {
            $("#nav").removeClass('nav-active');
            $("#nav").css('display','none');
            $('.humburher').removeClass('is-active');
            // $('.humburher').click();

        }
    });

    // $(".companiesList").slick({
    //     dots: false,
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     speed: 600,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     variableWidth: true,
    //
    //     responsive: [
    //
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         }
    //
    //     ]
    // });

});
