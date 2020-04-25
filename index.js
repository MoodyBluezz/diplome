

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const translate = document.querySelector('.translate')

translate.addEventListener('click', () => {
    document.querySelector('.more').style.display = 'block'
})
translate.addEventListener('mouseleave', () => {
    document.querySelector('.more').style.display = 'none'
})

const logoutLink = document.getElementById('logOut');
const loginLink = document.getElementById('logIn');
// const valueOutput = document.querySelector('#valueOutput span');
const valueOutput = document.getElementById('valueOutput');
let login = localStorage.getItem('Login');

if(login){
  loginLink.style.display = 'none';
  valueOutput.textContent = login;
}

logoutLink.onclick = function(){
  localStorage.clear();
  window.location.reload()
  valueOutput.textContent = loginLink;
}
