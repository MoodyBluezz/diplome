// var url = './logInPage/login.html';
// document.getElementById('logIn').onclick = function logInPanel(){
//     var left = (window.screen.width/2)-(600/2);
//     var top = (window.screen.height/2)-(600/2);
//     var targetWin = window.open(url, "LogIn", "width=600,height=600", "top=" +top+"left="+left);
//     return targetWin;
// }

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("mySidenav").style.height = "1080px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }