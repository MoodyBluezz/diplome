document.getElementById('id01').onclick = function() {backToMain()};
document.getElementById('closeX').onclick = function() {backToMain()};

function backToMain(){
    var url = '../index.html';
    location.href = url;
}

const inpName = document.getElementById('inpName');
//const inpPass = document.getElementById('inpPass');
const submitBtn = document.getElementById('btnSubmit');
//const valueOutput = document.getElementById('valueOutput');

submitBtn.onclick = function(){
    const name = inpName.value;

    if (name){
        localStorage.setItem("Login", name);
    }
    backToMain();
}
// let login = localStorage.getItem('Login');
// valueOutput.textContent = login ? login : 'Login';
// for (let i = 0; i < localStorage.length; i++) {
//     const name = localStorage.key(i);
//     const pass = localStorage.getItem(name);

//     valueOutput.innerHTML += `${name} ${pass}` + "&nbsp;" + "<i class='fa fa-user-circle-o' style='font-size:28px;color:white';></i>";
//     console.log(valueOutput);
// }