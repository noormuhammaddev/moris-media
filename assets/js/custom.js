$(document).ready(function() {
    $('.hamburger').on('click', function(){
        $('.nav-bar > ul').fadeToggle();
    })

    $('.sub-menu').on('click', function(){
        $(this).find('.mega-menu').toggle();
    })
});