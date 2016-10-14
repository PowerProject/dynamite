"use strict";

$(document).ready(function() {


    // SideBar
         $('.icon-menu').on('click',function() {
        $('.sidebar').toggleClass('active');
        $('.navMenu .overlay-sidebar').css('display', 'block');
      
    });

    $(".overlay-sidebar, a").click(function(e) {
        $('.sidebar').removeClass('active');
        $(".overlay-sidebar").css({"display":"none"});
    });
    //  End SideBar


    /* Anchor scroll*/

    $('.navMenu ul a').click( function(){
        var scroll_el = $(this).attr('href');
        var ww=$(window).width();
        if ($(scroll_el).length != 0 && ww>991) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top-45 }, 500);
        } else {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 500);
        }
        return false;
    });





   //parameters in Modal

    $('#products ul li a').on('click', function() {
        $(this).attr({'data-target':'#myModal', 'data-toggle':'modal'});
        var priceProduct=$(this).parent('li').find('p.price').text();
        var nameProduct=$(this).parent('li').find('p.name-product').text();
        $('#price-modal').text(priceProduct);
        $('#product-modal').text(nameProduct);
    });



    /*  =========== Resize ============*/
    $(window).resize(function() {

    });


    /*  =========== Scroll ============*/
    $(window).scroll(function() {
        var ww=$(window).width();
        if ($(window).scrollTop() > $('#why').offset().top-60) {
            $('header').css('position', 'fixed');
            $('.rowContacts').css('display', 'none');
            $('header .rowMenu .navMenu').css('padding-top', '33px');
            $('.rowMenu').css({
                'background': '#212121'});
            $('.rowMenu .logo img').css('padding-top', '17px');
           // $('.navMenu li a.active').css('color', '#ffd20d');


        } else {
            $('header').css('position', 'absolute');
            $('.rowContacts').css('display', 'block');
            $('header .rowMenu .navMenu').css('padding-top', '20px');
            $('.rowMenu').css({
                'background': 'transparent'});
            $('.rowMenu .logo img').css('padding-top', '4px');
           // $('.navMenu li a.active').css('color', '#fff');


        }

        // Menu Scroll
        $('.div').each(function () {
            var window_top = $(window).scrollTop();
            var div_top = $(this).offset().top;
            var div_1 = $(this).attr('id');
            if (window_top > div_top - 60){
                $('.sidebar').find('a').removeClass('active');
                $('.sidebar').find('.'+div_1+'').addClass('active');
            } else if (window_top<$('.div:nth-child(3)').offset().top-120) {
                $('.sidebar').find('a').removeClass('active');
                $('.sidebar a.main').addClass('active');
            }
            else{
                $('.sidebar').find('.'+div_1+'').removeClass('active');

            }
        });

    });

});
