var fig1 = document.getElementById("fig1"); fig1.style.display = "none";
var fig2 = document.getElementById("fig2"); fig2.style.display = "none";
var fig3 = document.getElementById("fig3"); fig3.style.display = "none";

var fig1_1 = document.getElementById("fig1_1");
var fig2_2 = document.getElementById("fig2_2");
var fig3_3 = document.getElementById("fig3_3");

function dec2bin() {
    fig1.style.display = "block";
    var x = document.getElementById("deci1").value;
    if ((/[^0-9]/g.test(x)) || x == "") {
        alert("You must enter an integer decimal number!");
        document.getElementById("deci1").value = "";
        document.getElementById("deci1").focus();
        return false;
    }
    x = parseInt(x);
    var bin = x.toString(2);
    var fig1_1_1 = "<span style='color: #3498db; font-style: normal; font-weight: 900;'>" + x + "</span> is <span style='color: #d5135a; font-style: normal; font-weight: 900;'>" + bin + "</span><br>";
    fig1_1.innerHTML = fig1_1_1;
}

function dec2hexa() {
    fig2.style.display = "block";
    var x = document.getElementById("deci2").value;
    if ((/[^0-9]/g.test(x)) || x == "") {
        alert("You must enter an integer decimal number!");
        document.getElementById("deci2").value = "";
        document.getElementById("deci2").focus();
        return false;
    }
    x = parseInt(x);
    var hex = x.toString(16).toUpperCase();
    var fig2_2_2 = "<span style='color: #3498db; font-style: normal; font-weight: 900;'>" + x + "</span> is <span style='color: #d5135a; font-style: normal; font-weight: 900;'>" + hex + "</span><br>";
    fig2_2.innerHTML = fig2_2_2;
}

function dec2octa() {
    fig3.style.display = "block";
    var x = document.getElementById("deci3").value;
    if ((/[^0-9]/g.test(x)) || x == "") {
        alert("You must enter an integer decimal number!");
        document.getElementById("deci3").value = "";
        document.getElementById("deci3").focus();
        return false;
    }
    x = parseInt(x);
    var octal = x.toString(8);
    var fig3_3_3 = "<span style='color: #3498db; font-style: normal; font-weight: 900;'>" + x + "</span> is <span style='color: #d5135a; font-style: normal; font-weight: 900;'>" + octal + "</span><br>";
    fig3_3.innerHTML = fig3_3_3;
}

/*document.getElementById("backToMain").onclick = function () { backToMain() };

function backToMain() {
  var url = '../index.html';
  location.href = url;
}

document.getElementById("nextPage").onclick = function () { nextPage() };

function nextPage() {
  var url = '../mathPage/math.html';
  location.href = url;
}*/