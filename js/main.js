$( document ).ready(function() {

    // Nice Select init
    $('select').niceSelect();

    // Dropdown
    $(document).on('click', '.dropdown__button', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(!$('.dropdown').hasClass('dropdown_open')){
            $(this).parent('.dropdown').addClass('dropdown_open');
        } else {
            $('.dropdown').removeClass('dropdown_open');
        }
    });

    // Cart mobile
    $(document).on('click', '.cart-popup__button', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(!$('.cart-popup').hasClass('cart-popup_open')){
            $(this).parent('.cart-popup').addClass('cart-popup_open');
            $('body').addClass('cart-popup_open');
            $('.burger').removeClass('burger_open');
            $('.header__mobile').removeClass('header__mobile_open');
            $('body').removeClass('mm_open');
        } else {
            $('.cart-popup').removeClass('cart-popup_open');
            $('body').removeClass('cart-popup_open');
        }
    });

    $(document).on('click', '.close-cart-popup', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.cart-popup').removeClass('cart-popup_open');
        $('body').removeClass('cart-popup_open');
    });

    // Mobile menu
    $(document).on('click', '.burger', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(!$('.burger').hasClass('burger_open')){
            $('.burger').addClass('burger_open');
            $('.header__mobile').addClass('header__mobile_open');
            $('body').addClass('mm_open');
            $('.cart-popup').removeClass('cart-popup_open');
            $('body').removeClass('cart-popup_open');
        } else {
            $('.burger').removeClass('burger_open');
            $('.header__mobile').removeClass('header__mobile_open');
            $('body').removeClass('mm_open');
        }
    });
    
    $(document).on('click', 'body', function(e){
        $('.dropdown').removeClass('dropdown_open');
    });

    // Sidebar group
    $(document).on('click', '.sidebar-group__button', function(e){
        e.preventDefault();
        e.stopPropagation();
        if($(this).parent('.sidebar-group').hasClass('sidebar-group_open')){
            $(this).parent('.sidebar-group').removeClass('sidebar-group_open');
        } else {
            $(this).parent('.sidebar-group').addClass('sidebar-group_open');
        }
    });

    // Tabs
    $('ul.tab-nav .tab-nav__link').click(function(){
        var tab_id = $(this).attr('data-tab');
        
		$('ul.tab-nav .tab-nav__link').removeClass('active');
		$('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })

    // Tabs vertical
    $('ul.tab-nav-vertical .tab-nav-vertical__link').click(function(){
        var tab_id = $(this).attr('data-tab');
        var vertical_tabs_block = $(this).parents('.vertical-tabs');

        vertical_tabs_block.find('ul.tab-nav-vertical .tab-nav-vertical__link').removeClass('active');
        vertical_tabs_block.find('.tab-content-vertical').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })
    
    // Reviews - Read more
    $(document).on('click', '.review__read-more', function(e){
        e.preventDefault();
        $(this).parent('.review__text').find('.review__text-hidden').removeClass('review__text-hidden');
        $(this).remove('.review__read-more');
    });

    // Slick init & setup
    $('.slider__items').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow:"<button class='slick-left'><i class='icon icon_chevron_left'></i></button>",
        nextArrow:"<button class='slick-right'><i class='icon icon_chevron_right'></i></button>",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    //autoplay: true,
                    infinite: true,
                }
            }
        ]
    });

    $('.slider__selections').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow:"<button class='slick-left'><i class='icon icon_chevron_left'></i></button>",
        nextArrow:"<button class='slick-right'><i class='icon icon_chevron_right'></i></button>",
        responsive: [
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    //autoplay: true,
                    infinite: true,
                }
            }
        ]
    });

    $('.item-slider__single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.item-slider__nav'
    });

    $('.item-slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.item-slider__single',
        dots: false,
        centerMode: false,
        arrows: false,
        focusOnSelect: true
    });

    //Input range
    var el, newPoint, newPlace, offset;
    $("input[type='range']").change(function() {
    el = $(this);
    width = el.width();
    newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
    offset = -6;

    if (newPoint < 0) {
        newPlace = 0;
    } else if (newPoint > 1) {
        newPlace = width;
    } else {
        newPlace = width * newPoint + offset; offset -= newPoint;
    }

    el
    .next("output").css({
        left: newPlace,
        marginLeft: offset + "%"
    })
        .text(el.val());
    })
    .trigger('change');

    $("input[type=range]").mousemove(function (e) {
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
        var percent = val * 100;
        $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + percent + '%, #9128a0), ' + 'color-stop(' + percent + '%, #e6e6e6)' + ')');
        $(this).css('background-image', '-moz-linear-gradient(left center, #9128a0 0%, #9128a0 ' + percent + '%, #e6e6e6 ' + percent + '%, #e6e6e6 100%)');
    });
});