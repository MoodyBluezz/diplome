new Vue({
  el: "#app",
  data: {
    perspective: 100,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    transformOriginX: "center",
    transformOriginY: "center"
  }
});

convertBase = "0123456789abcdefghijklmnopqrstuvwxyz";
function convert(input, origin, dest) {
  input = input.toString().toLowerCase(); origin = origin.toString(); dest = dest.toString()
  var b = 0; var Result = "";
  if (Number(origin) > convertBase.length || Number(dest) > convertBase.length || Number(origin) < 2 || Number(dest) < 2) return "Invalid numbering system"
  for (var c = 1; c <= input.length; c++) { b += convertBase.indexOf(input.substring(c - 1, c)) * (Math.pow(origin, input.length - c)); if (convertBase.indexOf(input.substring(c - 1, c)) > Number(origin)) return 'Character "' + input.substring(c - 1, c) + '" not present in origin system'; }
  var a = Math.floor(Math.log(b) / Math.log(dest))
  while (a > -1) {
    var e = Math.pow(dest, a)
    a--;
    var d = (b - b % e) / e + 1;
    b %= e;
    Ciffer = convertBase.substring(d - 1, d);
    Result += Ciffer;
  }
  return Result
}

document.getElementById("backToMain").onclick = function () { backToMain() };

function backToMain() {
  var url = '../index.html';
  location.href = url;

}

document.getElementById("nextPage").onclick = function () { nextPage() };

function nextPage() {
  var url = '../videoPage/video.html';
  location.href = url;

}