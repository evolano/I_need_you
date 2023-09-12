// navbar的頭貼 因有沒有登入註冊顯示資料

if (localStorage.getItem("user_login") != null) {
  //  有登入的話
  document.getElementsByClassName('nav_userImg')[0].src = "./img/nav_footer/unknow_user.png";
  document.getElementsByClassName('nav_username')[0].innerHTML = "陳雅婷"
  console.log('已登入')
  document.getElementsByClassName('nav_membe_btn')[0].href = "../Yating_page.html"


  if (localStorage.getItem("expert_login") != null) {
    document.getElementsByClassName('nav_userImg')[0].src = "./img/nav_footer/main_user.jpg";
  } else {
    if (localStorage.getItem("owner_login") != null) { document.getElementsByClassName('nav_userImg')[0].src = "./img/nav_footer/main_user.jpg"; } else {
      document.getElementsByClassName('nav_userImg')[0].src = "./img/nav_footer/unknow_user.png";
      document.getElementsByClassName('footer_chat_link')[0].style.display = "none";
    }
  }
} else {
  
  document.getElementsByClassName('nav_userImg')[0].src = "./img/nav_footer/unknow_user.png";
  document.getElementsByClassName('nav_username')[0].innerHTML = "用戶登入"
  document.getElementsByClassName('nav_link')[5].style.display = "none";

}

function logout() {
  localStorage.removeItem('user_login');
}
