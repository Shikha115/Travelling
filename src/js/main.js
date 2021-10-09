$(document).ready(function() {

    // $("button").addClass('magic-hover magic-hover__square');


    // slider
    var slider = $('.slider-carousel.owl-carousel');
    slider.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 2000,
        dots: false,
        autoplayHoverPause: false
    });

    // menu
    $('.toggle').on('click', function() {
        $('.menu').toggleClass('active');
    });
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();

    // video
    (() => {
        // Gets the video src from the data-src on each button
        var $videoSrc;
        $('.video-btn').click(function() {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);
        // when the modal is opened autoplay it  
        $('#myModal').on('shown.bs.modal', function(e) {
                // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
                $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
            })
            // stop playing the youtube video when I close the modal
        $('#myModal').on('hide.bs.modal', function(e) {
            // a poor man's stop video
            $("#video").attr('src', $videoSrc);
        })
    });

    // destination
    var slider = $('.destination-carousel.owl-carousel');
    slider.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        autoplayHoverPause: false
    });

    // appointment
    $(() => {
        $(document).scroll(() => {
            var scroll = $(this).scrollTop();
            if (scroll > 200) {
                $('.appointment').css('display', 'block')
            } else {
                $('.appointment').css('display', 'none')
            }
        });
    });

    // package
    var slider = $('.package-carousel.owl-carousel');
    slider.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 2000,
        dots: false,
        autoplayHoverPause: false
    });

    var slider = $('.package-img-carousel.owl-carousel');
    slider.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 2000,
        dots: false,
        animateOut: 'fadeOut',
        autoplayHoverPause: false
    });

    // testimonial
    var slider = $('.test-carousel.owl-carousel');
    slider.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 2000,
        dots: false,
        nav: true,
        navText: ["<img src='src/images/cprev.png.webp'>", "<img src='src/images/cnext.png.webp'>"],
        autoplayHoverPause: false
    });

    // certificates
    var slider = $('.certified-carousel.owl-carousel');
    slider.owlCarousel({
        items: 6,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 2000,
        dots: false,
        autoplayHoverPause: false
    });

    // testimonial
    var slider = $('.testimonial-carousel.owl-carousel');
    slider.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 2000,
        dots: false,
        autoplayHoverPause: false
    });

    // faq
    $(() => {
        $(document).scroll(() => {
            var scroll = $(this).scrollTop();
            if (scroll > 500) {
                $('.faq-absolute').css('display', 'block')
            } else {
                $('.faq-absolute').css('display', 'none')
            }
        });
    });

    //about-video
    document.getElementById('myVideo').addEventListener('ended', myHandler, false);

    function myHandler(e) {
        console.log('ended');
        setTimeout(function() {
            document.getElementById('myVideo').play();
        }, 10000);
    }

    //team
    var slider = $('.team-carousel.owl-carousel');
    slider.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        animateOut: 'fadeOut',
        autoplayHoverPause: false
    });



});

//slick package slider
$('.package-slick').slick({
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    arrows: false,
    pauseOnHover: false
});

//room
var slider = $('.vila-carousel.owl-carousel');
slider.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 2000,
    dots: false,
    animateOut: 'fadeOut',
    autoplayHoverPause: false
});

//cursor
options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
}
magicMouse(options);