jQuery(document).ready(function() {
    jQuery('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    jQuery('.multiple-items').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    jQuery('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    jQuery('.uneven').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    jQuery('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    jQuery('.center').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });
    jQuery('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });
    jQuery('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    jQuery('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slide: 'div',
        cssEase: 'linear'
    });

    jQuery('.add-remove').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    var slideIndex = 1;
    jQuery('.js-add-slide').on('click', function() {
        slideIndex++;
        jQuery('.add-remove').slickAdd('<div><h3>' + slideIndex + '</h3></div>');
    });

    jQuery('.js-remove-slide').on('click', function() {
        jQuery('.add-remove').slickRemove(slideIndex - 1);
        if (slideIndex !== 0){
            slideIndex--;
        }
    });

    jQuery('.filtering').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    var filtered = false;
    jQuery('.js-filter').on('click', function() {
        if (filtered === false) {
            jQuery('.filtering').slickFilter(':even');
            jQuery(this).text('Unfilter Slides');
            filtered = true;
        } else {
            jQuery('.filtering').slickUnfilter();
            jQuery(this).text('Filter Slides');
            filtered = false;
        }
    });

    jQuery('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    jQuery('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    jQuery(window).on('scroll', function() {
        if (jQuery(window).scrollTop() > 166) {
            jQuery('.fixed-header').show();
        } else {
            jQuery('.fixed-header').hide();
        }
    });

    jQuery('ul.nav a').on('click', function(event) {
        event.preventDefault();
        var targetID = jQuery(this).attr('href');
        var targetST = jQuery(targetID).offset().top - 48;
        jQuery('body, html').animate({
            scrollTop: targetST + 'px'
        }, 300);
    });

    jQuery('.single-item-rtl').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true
    });
    jQuery('.multiple-items-rtl').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        rtl: true
    });

});