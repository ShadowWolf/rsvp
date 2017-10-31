/*
 *
 * Project Name: Manten - Style 6
 * URL: http://templatesuper.com
 * Version: 1.1
 *
 * Author: Adnan
 *
 */


// HEADER SLIDER
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: true
    });
});

//Scroll to top
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $('.scroll-to-top').addClass('affix');
    } else {
        $('.scroll-to-top').removeClass('affix');
    };

});

// SMOOTHSCROLL
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');

        $('.navbar-collapse.collapse').removeClass("show");
    });
});

// SAVE TO CSV
$(function() {
    $(".submit").click(function() {
        var name = $("#name").val();
        var dataString = 'name=' + name;

        if (name == '') {
            $('.alert-danger').fadeIn().show();
        } else {
            $.ajax({
                type: "POST",
                url: "rsvp.php",
                data: dataString,
                success: function() {
                    $('.alert-danger').fadeIn().hide();
                    $('.alert-success').fadeIn().fadeOut(3000);
                }
            });
        }
        return false;
    });
});

// SCROLLREVEAL
window.sr = ScrollReveal();
sr.reveal('#home .caption .box', {
    duration: 1500,
    reset: true
}, 50);
sr.reveal('#story', {
    duration: 1500,
    reset: true
}, 50);
sr.reveal('#wedding .col-md-6', {
    duration: 1500,
    reset: true
}, 50);
sr.reveal('#accomm .col-md-12', {
    duration: 1500,
    reset: true
}, 50);
sr.reveal('#registry .col-md-12, #registry .box', {
    duration: 2000,
    reset: true
}, 200);
sr.reveal('#rsvp .container', {
    duration: 1500,
    reset: true
}, 50);
