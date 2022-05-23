function addition() {
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  var z = x + y;
  document.getElementById("res").innerHTML = z;
}
function subtraction() {
  var x = Number(document.getElementById("x1").value);
  var y = Number(document.getElementById("y1").value);
  var z = x - y;
  document.getElementById("sub").innerHTML = z;
}
function Multiplication() {
  var x = Number(document.getElementById("x2").value);
  var y = Number(document.getElementById("y2").value);
  var z = x * y;
  document.getElementById("mul").innerHTML = z;
}
function Division() {
  var x = Number(document.getElementById("x3").value);
  var y = Number(document.getElementById("y3").value);
  var z = x / y;
  document.getElementById("div").innerHTML = z;
}
function Modulus() {
  var x = Number(document.getElementById("x4").value);
  var y = Number(document.getElementById("y4").value);
  var z = x % y;
  document.getElementById("mod").innerHTML = z;
}
function Combining() {
  var x = document.getElementById("x5").value;
  var y = document.getElementById("y5").value;
  var z = x + " " + y;
  document.getElementById("com").innerHTML = z;
}
