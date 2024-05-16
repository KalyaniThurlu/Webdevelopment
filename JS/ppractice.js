let num = ["latha", "geetha", "suma", "rama"];
console.log(num.push("preethi"), num);
let mynum = ["padhama", "sumana", "ramana", "pooja"];
console.log(mynum.pop(), mynum);
let arr = [1, 6, 5, 4, 3, 2];
console.log(arr.shift(), arr);
let myarr = [1, 2, 3, 4, 5, 6];
console.log(myarr.unshift(10), myarr);
let nums = [10, 12, 24, 15, 9];
nums.forEach(function (v) {
  console.log(v);
});
nums.sort();
const newarr = nums.filter(function (m) {
  return m > 20;
});
console.log(
  newarr.reduce(function (c, p) {
    return c + p;
  }, 0)
);
console.log([21, 22, 2].some((v) => v < 20));
//===Aproch2====;
let Answer = [20, 10, 3, 1, 5, 0];
Answer.forEach(function (v) {
  return v;
});
Answer.sort((a, b) => a - b);
const myanswer = Answer.filter(function (m) {
  return m > 20;
});
console.log(
  myanswer.reduce(function (c, p) {
    return c + p;
  }, 0)
);
let greterthan20 = false;
for (let i = 0; i < [24, 25, 27, 28].length; i++) {
  if ([24, 25, 27, 28][i] > 20) {
    greterthan20 = true;
  }
}
console.log(greterthan20);
