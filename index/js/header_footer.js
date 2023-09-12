$(function () {
    $('.nav_hamburger').click(function () {
        console.log('hello');
         $('.nav_item').addClass('nav_item_open');
         $('.nav_item_dark').addClass('nav_item_dark_show');
         
    })
    $('.nav_turnback').click(function () {
        console.log('hello');
         $('.nav_item').removeClass('nav_item_open');
         $('.nav_item_dark').removeClass('nav_item_dark_show');
    })

})
