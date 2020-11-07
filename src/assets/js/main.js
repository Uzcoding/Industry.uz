@@include('selectric.js');
@@include('common.js');
@@include('popup.js');

/* Aos */
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

$(function () {
    /* Slick slider */
    $('.slider').slick({
        infinite: true,
        prevArrow: $('.slider__prev'),
        nextArrow: $('.slider__next'),
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
    });

    /* Selectric dropdown */
    $('.select').selectric();

    /* Menu Nav toggle */
    var burger = $('.burger');
    var burgerIcon = $('.burger-icon');
    var menu = $('#mobile-nav');
    var body = $('body');
    var links = $('.mobile-nav__list li a');

    burger.on('click', function () {
        burgerIcon.toggleClass('burger-icon-active');
        menu.toggleClass('mobile-nav--active');
        body.toggleClass('lock');
    });

    links.on('click', function () {
        burgerIcon.toggleClass('burger-icon-active');
        menu.toggleClass('mobile-nav--active');
        body.toggleClass('lock');
    });


    /* Modal */
    var overlay = $('.overlay'),
        modal = $('.modal'),
        modalClose = $('.modal__close'),
        modalTitle = $('.modal-title'),
        modalText = $('.modal-text'),
        modalLink = $('.modal__title');
    text = $('.modal__text');

    overlay.hide();


    modalLink.on('click', function (e) {
        e.preventDefault();
        overlay.show();
        modal.toggleClass('modal--active');
        modalTitle.html($(this).html())
        modalText.html($(this).find(text).html())
        body.toggleClass('lock')

    });

    modalClose.on('click', function () {
        modal.toggleClass('modal--active');
        overlay.hide();
        body.toggleClass('lock')
    });

    var w = $(document).width();

    // $('#first-gallery').on('click', function() {
    //     $('.first-gallery img:first-child').trigger('click');
    // });

    // $('.first-gallery').lightGallery({
    //     thumbnail:true,
    //     animateThumb: false,
    //     showThumbByDefault: false
    // });

    $('#video-gallery').on('click', function() {
        $('.video-gallery img:first-child').trigger('click');
    });
    

    $('.video-gallery').lightGallery({
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            controls: 0
        },
        loadYoutubeThumbnail: true,
        youtubeThumbSize: 'default',
        thumbnail:true,
        animateThumb: false,
        showThumbByDefault: false
        
    }); 

    var i = 0;
    var speed = 30; /* The speed/duration of the effect in milliseconds */
    // var type = $('.type');
    // var txt = type.attr('data-content'); /* The text */
    var gallery = $('.portfolio__content .portfolio-icon ');

    gallery.on('mouseenter', function() {
        var text = this.nextElementSibling.getAttribute('data-content');
        var type = this.nextElementSibling;
        function typeWriter() {
        if (i < text.length) {
            type.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
        typeWriter(text);
    });


    gallery.on('mouseleave', function() {
        i = 0;
        $('.type').text('');
    });

 
    
    if (w > 1200) {

    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        fadingEffect: true,
        verticalCentered: false,
        scrollOverflow: false,
        sectionSelector: '.scroll',
        fitToSection: true,
        normalScrollElements: '#modal',
        anchors: ['home', 'golden', 'peace', 'event', 'pen', 'house', 'partners', 'contact'],
        lockAnchors: true,
        

        onLeave: function(){
            $('.scroll [data-aos]').removeClass("aos-animate");
        },
        onSlideLeave: function(){
            $('.scroll [data-aos]').removeClass("aos-animate");
        },
        afterSlideLoad: function(){
            $('.scroll.active [data-aos]').addClass("aos-animate");
        },
        afterLoad: function(){
            $('.scroll.active [data-aos]').addClass("aos-animate");
        }
    });
}

$('.contact-scroll').on('click', function() {
    fullpage_api.moveTo('contact', 2);
})

$('.home-scroll').on('click', function() {
    fullpage_api.moveTo('home', 2);
})

$('.golden-scroll').on('click', function() {
    fullpage_api.moveTo('golden', 2);
})

$('.peace-scroll').on('click', function() {
    fullpage_api.moveTo('peace', 2);
})

$('.event-scroll').on('click', function() {
    fullpage_api.moveTo('event', 2);
})

$('.pen-scroll').on('click', function() {
    fullpage_api.moveTo('pen', 2);
})

$('.house-scroll').on('click', function() {
    fullpage_api.moveTo('house', 2);
})

$('.partners-scroll').on('click', function() {
    fullpage_api.moveTo('partners', 2);
})

});

