let Arr = [1, "latha", true];
console.log(Arr.push(2), Arr);

let arr = [1, "latha", true, 2, 4];
let exarr = arr.pop();
console.log(arr);

let books = ["english", "hindhi", "telugu"];
let exbooks = books.shift();
console.log(books);

let Books = ["english", "hindhi", "telugu"];
let Exbooks = Books.unshift("social");
console.log(Books);

let num = [1, 2, 3, 4, 6, 7, 8];
console.log(num.concat(20, 40));
let nums = [1, 2, 3, 4, 5, 9, 6];
let exnums = nums.splice(5);

console.log(nums);
let colors = [10, 20, 30, 40];
let excolors = colors.indexOf(20);
console.log(excolors);
let std = [1, 2, 3, 4];
console.log("abs", std.join(""));
let Num = [1, 2, 3, 4, 5, 6, 7];
let newnum = Num.forEach(function (v) {
  console.log(v, ")");
});
let Num1 = [1, 2, 3, 5, 4, 6];
let Newnum = Num1.map(function (e) {
  console.log(e);
  return e % 2 == 0;
});
console.log(Newnum);
let Num2 = [1, 6, 5, 4, 2, 3];
let mynum = Num2.filter(function (m) {
  console.log(m);
  return m % 2 == 0;
});
console.log(mynum);
let num3 = [2, 5, 9, 6, 12];
let Newnum3 = num3.forEach(function (v) {
  console.log(v + ")");
});
//===Remove duplicate values
let arr1 = [5, 6, 5, 3, 2, 1];
function getNewArray() {
  let uniqueArr = [];
  for (let x of arr1) {
    if (uniqueArr.indexOf(x) == -1) {
      uniqueArr.push(x);
    }
  }
  return uniqueArr;
}
console.log(arr1);
console.log(getNewArray(arr1));

let nname = [1, 2, 3, 10, 10, 4, 5, 6, 7, 1];
function good() {
  let myname = [];
  for (let x of nname) {
    if (myname.indexOf(x) == -1) {
      myname.push(x);
    }
  }
  return myname;
}
console.log(nname);
console.log(good(nname));
//take arrayprint the elementssquaresortthemfilternumbers greater20&findtheirsum
let kala = [1, 2, , 5, 6, 7];

kala.forEach(function (v) {
  console.log(v);
});
kala.sort();
const newarr = kala.filter(function (m) {
  return m > 20;
});
console.log(
  newarr.reduce(function (c, p) {
    return c + p;
  }, 0)
);
console.log([23, 24, 25, 27].some((v) => v > 20));

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
