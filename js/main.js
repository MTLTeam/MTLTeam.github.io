 
$(window).on("load", function() {
    /*-------------------||  Preloader  ||-------------------*/
    $(".preloader").fadeOut("slow");
});

$(document).ready(function() {
    /*-------------------||  Navbar Shrink  ||-------------------*/

    $(window).on("scroll", function() {

        if($(this).scrollTop() > 90) {

            $(".navbar").addClass("navbar-shrink");

        } else {

            $(".navbar").removeClass("navbar-shrink");

        }

    });


    $(".downloadButton").on('click', function() {
        window.open("https://play.google.com/store/apps/details?id=com.mtlteam.miquizzer");
    });


    $(".privacyButton").on('click', function() {
        window.open("./privacy/privacy.php");
    });

    $(".facebookButton").on('click', function() {
        window.open("https://www.facebook.com/groups/526796088284325/?ref=share");
    });



    /*-------------------||  Video Popup  ||-------------------*/
    const videoSrc = $("#player-1").attr("src");

    $(".video-play-btn, .video-popup").on("click", function() {

        if($(".video-popup").hasClass("open")) {

            $(".video-popup").removeClass("open");

            $("#player-1").attr("src", "");

        } else {
            $(".video-popup").addClass("open");

            if($("#player-1").attr("src")=='') {

                $("#player-1").attr("src", videoSrc);

            }
        }
    });





    /*-------------------||  Features Carousel  ||-------------------*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

      /*-------------------||  Screenshots Carousel  ||-------------------*/
      $('.screenshots-carousel').owlCarousel({
        margin:0,
        responsiveClass:true,
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
    });

    /*-------------------||  Page Scrolling - ScrollIt  ||-------------------*/
    $.scrollIt({
        topOffset: -50
    });

    /*-------------------||  Navbar Collapse  ||-------------------*/
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });

    /*-------------------||  Toggle Theme  ||-------------------*/
    function toggleTheme() {
        if(localStorage.getItem("miquizzer-theme") !== null) {
            if(localStorage.getItem("miquizzer-theme")==="dark") {
                $("body").addClass("dark");
            } else {
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }

    toggleTheme();

    $(".toggle-theme").on("click", function() {

        $("body").toggleClass("dark");

        if($("body").hasClass("dark")) {
            localStorage.setItem("miquizzer-theme", "dark");
        } else {
            localStorage.setItem("miquizzer-theme", "light");
        }

        updateIcon();
    });

    function updateIcon() {
        if($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        } else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }

});