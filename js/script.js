jQuery(document).ready(function($) {
    $('li').has('ul').append('<span class="arrow"></span>');
    $('.menu-toggler').on('click',function(){
        $('.menu').slideToggle();
    });
    $('body').on('click', '.arrow', function (){
        $(this).prev('ul').slideToggle();
    });
});