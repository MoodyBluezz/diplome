document.getElementById('id01').onclick = function() {backToMain()};
document.getElementById('closeX').onclick = function() {backToMain()};

function backToMain(){
    var url = '../index.html';
    location.href = url;
}

const inpName = document.getElementById('inpName');
//const inpPass = document.getElementById('inpPass');
const submitBtn = document.getElementById('btnSubmit');
const valueOutput = document.getElementById('valueOutput');

submitBtn.onclick = function(){
    const name = inpName.value;
   // const pass = inpPass.value;

    // console.log(name);
    // console.log(pass);

    // if (name && pass){
    //     localStorage.setItem(name, pass);
    // }
    // backToMain();

    if (name){
        localStorage.setItem(name, 0);
    }
    backToMain();
}

for (let i = 0; i < localStorage.length; i++) {
    const name = localStorage.key(i);
    const pass = localStorage.getItem(name);

    valueOutput.innerHTML += `${name} ${pass}` + "&nbsp;" + "<i class='fa fa-user-circle-o' style='font-size:28px;color:white';></i>";
    console.log(valueOutput);
}