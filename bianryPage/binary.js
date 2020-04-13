//Преобразователь двоичный восьмеричное шестнадцатеричный
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
        alert("Необходимо ввести целое десятичное число!");
        document.getElementById("deci1").value = "";
        document.getElementById("deci1").focus();
        return false;
    }
    x = parseInt(x);
    var bin = x.toString(2);
    var fig1_1_1 = "<span style='color: #3498db; font-style: normal; font-weight: 900;'>" + x + "</span> это <span style='color: #d5135a; font-style: normal; font-weight: 900;'>" + bin + "</span><br>";
    fig1_1.innerHTML = fig1_1_1;
}

function dec2hexa() {
    fig2.style.display = "block";
    var x = document.getElementById("deci2").value;
    if ((/[^0-9]/g.test(x)) || x == "") {
        alert("Необходимо ввести целое десятичное число!");
        document.getElementById("deci2").value = "";
        document.getElementById("deci2").focus();
        return false;
    }
    x = parseInt(x);
    var hex = x.toString(16).toUpperCase();
    var fig2_2_2 = "<span style='color: #3498db; font-style: normal; font-weight: 900;'>" + x + "</span> это <span style='color: #d5135a; font-style: normal; font-weight: 900;'>" + hex + "</span><br>";
    fig2_2.innerHTML = fig2_2_2;
}

function dec2octa() {
    fig3.style.display = "block";
    var x = document.getElementById("deci3").value;
    if ((/[^0-9]/g.test(x)) || x == "") {
        alert("Необходимо ввести целое десятичное число!");
        document.getElementById("deci3").value = "";
        document.getElementById("deci3").focus();
        return false;
    }
    x = parseInt(x);
    var octal = x.toString(8);
    var fig3_3_3 = "<span style='color: #3498db; font-style: normal; font-weight: 900;'>" + x + "</span> это <span style='color: #d5135a; font-style: normal; font-weight: 900;'>" + octal + "</span><br>";
    fig3_3.innerHTML = fig3_3_3;
}

function roundit(which){
    return Math.round(which*100)/100
}
    
function cmconvert(){
    with (document.cminch){
    feet.value = roundit(cm.value/30.84);
    inch.value = roundit(cm.value/2.54);
    }
}

function inchconvert(){
    with (document.cminch){
    cm.value = roundit(inch.value*2.54);
    feet.value=roundit(inch.value/12);
    }
}

function feetconvert(){
    with (document.cminch){
    cm.value=roundit(feet.value*30.48);
    inch.value=roundit(feet.value*12);
    }
}

//Преобразователь длинны
var factors1 = new Array(1, 0.01, 0.00001, 0.00000621, 0.3937, 0.0328, 0.01094);
var factors2 = new Array(100, 1, 0.001, 0.000621, 39.37, 3.28,  1.094);
var factors3 = new Array(100000, 1000, 1, 0.621, 39370, 3280, 1094);
var factors4 = new Array(160934, 1609.34, 1.60934, 1, 63360, 5280,1760);
var factors5 = new Array(2.54, 0.0254, 0.0000254, 0.0000158, 1, 0.08333, 0.02778);
var factors6 = new Array(30.48, 0.3048, 0.0003048, 0.0001896, 12, 1, 0.3333);
var factors7 = new Array(91.44, 0.9144, 0.0009144, 0.0005688, 36, 3, 1);
var factors = new Array(factors1,factors2,factors3,factors4,factors5,factors6,factors7);

function convert_unit()
{
	from_index = document.length_con.from_unit.selectedIndex;
	to_index = document.length_con.to_unit.selectedIndex;
	factor = factors[from_index][to_index];
	document.getElementById("formula").innerHTML = document.length_con.from_unit.options[document.length_con.from_unit.selectedIndex].text + " = " + factor + " " + document.length_con.to_unit.options[document.length_con.to_unit.selectedIndex].text;
	if(isNaN(document.length_con.from_value.value))
		document.getElementById("to_value").innerHTML = "Not a valid number.";
	else
		document.getElementById("to_value").innerHTML = factor * document.length_con.from_value.value;
}
////////////////////////

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