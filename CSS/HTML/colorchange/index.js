//function change() {
//const randomColor = Math.round(Math.random() * 10000000).toString(16);
//document.body.style.backgroundColor = "#" + randomColor;
//}
let a = 0,
  b = 0,
  c = 0;
function change() {
  a++;
  b++;
  c++;
  document.body.style.backgroundColor = `rgb(${a},${b},${c})`;
}
