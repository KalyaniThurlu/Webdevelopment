function oparatorNumbers(a, b, oparation) {
  return oparation(a, b);
}
function adition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
const res = oparatorNumbers(2, 3, adition);
const res1 = oparatorNumbers(4, 2, subtraction);
console.log(res);
console.log(res1);
