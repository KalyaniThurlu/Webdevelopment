let arr = [1, 2, 3, 5, 4, 5];
console.log(arr);
let a = 10,
  b = 20;
function name() {
  if (a > b) {
    return "currect";
  } else {
    console.log("this are wrong");
  }
}
name();
var num = 21;
function displayNum() {
  if (num % 2 === 0) {
    console.log(`this is ${num}even`);
  } else {
    console.log(`this is ${num}odd`);
  }
}
displayNum();
function mad() {
  console.log("this is mad");
  function bad() {
    console.log("this is bad");
    function xyz(a, b) {
      a();
      b();
    }
  }
}
console.log(mad());
function eligbilt(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(eligbilt(20));
function my(names) {
  let list;

  switch (names) {
    case "latha":
      list = "wellcome";
      break;
    case "geetha":
      list = "hi";
      break;
    case "suma":
      list = "hello";
      break;
    case "rama":
      list = "how are you";
      break;
  }
  return list;
}
console.log(my("suma"));
for (let i = 100; i >= 0; i--) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
let j = 10;
do {
  console.log(j);
  j++;
} while (j < 15);

function myName(num) {
  if (num >= 10) {
    return true;
  } else {
    return false;
  }
}
console.log(myName(20));
function largeNum(a, b, c) {
  if (a < b ? a : b || b > c ? b : c) {
    return "largenum";
  } else {
    return "samllnum";
  }
}
console.log(largeNum(4, 5, 6));
