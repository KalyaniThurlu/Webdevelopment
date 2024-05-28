function display() {
  console.log("hello world");
}

display();

function displayFun() {
  console.log("hello ");
}
var displayFun2 = displayFun();
{
  console.log("hi");
}
{
  console.log("wellcome");
}

displayFun();

function noOfWords(str) {
  console.log(str.split("").length);
}
noOfWords("this is a function");

let y = 7;
function nextValue() {
  return ++y;
}

nextValue();

console.log(y);
//clousers:inner functions can remember outer functions values
function mad() {
  console.log("i am mad");
}
function bad() {
  console.log("i am bad");
}
function xyz(a, b) {
  a();
  b();
}
xyz(mad, bad);
//=====Operators===;
//===arthematic operators=== ;
function good(a, b) {
  return a + b;
}
console.log(good(2, 3));
function decriment(a, b) {
  return a - b;
}
console.log(decriment(6, 8));
function multiplication(a, b) {
  return a * b;
}
console.log(multiplication(3, 7));
function division(a, b) {
  return a % b;
}
console.log(division(4, 3));
//===logical aprators======

let a = 20,
  b = 30;
function andOparator() {
  if (a < b && a !== b) {
    console.log(" this is and oprator");
  } else {
    console.log("All are wrong");
  }
}
andOparator();
let A = 20;
B = 30;
function orOPrator() {
  if (a < b || a === b) {
    console.log("this is or oprator");
  } else {
    console.log("all are wrong");
  }
}
orOPrator();
//====!======
let isTrue = true;
let isFalse = !isTrue;
console.log(isTrue);
//===relational=====
let c = 30,
  x = 40,
  f = 50;
function programme() {
  if (c >= x) {
    (" c  is greterthan x");
  }
  if (f <= c) {
    console.log("f lessthan c");
  }
  if (f >= x) {
    console.log("f lessthan or eqults to x");
  } else {
    console.log("f is eqults to x");
  }
}
programme();
//====ternary opretor======
var v = 20;
var res = v < 25 ? 20 : 25;
console.log(res);

var z = 10;
var Res = z > 30 ? 10 : 30;
console.log(Res);
