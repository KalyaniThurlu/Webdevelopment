let c = 0;
let cvalue = document.getElementById("one");

function text() {
  c++;
  cvalue.textContent = c;
}
let v = 0;
let vvalue = document.getElementById("two");
function text1() {
  v--;
  vvalue.textContent = v;
}

function text2() {
  document.getElementById("three");
  cvalue.textContent = 0;
}
