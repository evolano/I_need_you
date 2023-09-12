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


//     // 获取按钮和导航栏元素
// const toggleButton = document.getElementById('toggleButton');
// const toggleButton2 = document.getElementById('toggleButton2');
// const nav = document.querySelector('nav');

// // 获取导航栏的高度
// const navHeight = nav.clientHeight;

// // 检测页面滚动事件
// window.addEventListener('scroll', () => {
//     // 获取页面滚动的垂直偏移量
//     const scrollY = window.scrollY;

//     // 如果页面滚动的垂直偏移量超过了导航栏的高度
//     if (scrollY > navHeight) {
//         // 隐藏按钮
//         toggleButton.style.display = 'none';
//         toggleButton2.style.display = 'none';
//     } else {
//         // 显示按钮
//         toggleButton.style.display = 'inline-block';
//         toggleButton2.style.display = 'inline-block';
//     }
// });


})