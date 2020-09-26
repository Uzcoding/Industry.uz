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

    burger.click(function () {
        burgerIcon.toggleClass('burger-icon-active');
        menu.toggleClass('mobile-nav--active');
        body.toggleClass('lock');
    });

    links.click(function () {
        burgerIcon.toggleClass('burger-icon-active');
        menu.toggleClass('mobile-nav--active');
        body.toggleClass('lock');
    });


    /* Smooth scrool */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;


        $("html, body").animate({
            scrollTop: blockOffset
        }, 2000);
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


    modalLink.on('click', function(e) {
        e.preventDefault();
        overlay.show();
        modal.toggleClass('modal--active');
        modalTitle.html($(this).html())
        modalText.html($(this).find(text).html())
        body.toggleClass('lock')
        
    });

    modalClose.click(function() {
        modal.toggleClass('modal--active');
        overlay.hide();
        body.toggleClass('lock')
    });

    


});