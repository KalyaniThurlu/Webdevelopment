function elgiblity(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(elgiblity(18));

//===Ex2=====
var num = 25;
if (num % 2 === 0) {
  console.log(`${num}is even`);
} else {
  console.log(`${num}is odd`);
}
//===Ex3====

function negativePositive(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(negativePositive(5)); // Output: "positive"
console.log(negativePositive(-3)); // Output: "negative"
console.log(negativePositive(0)); // Output: "zero"
//===Ex4====
function largeSmall(a, b, c) {
  console.log("largest value is" + (a > b) ? (a < c ? a : c) : b < c ? b : c);
}
console.log("larget value is" + Math.max(5, 10, 20));
//====Ex====
function smallestcalue(a, b, c) {
  console.log(a > b ? (a > c ? a : c) : a > b ? b : c);
}
console.log("smallest value" + Math.min(2, 0, 1));
//====Ex5====Switch statement
function wellcome(userType) {
  let greeting;
  switch (userType) {
    case "teacher":
      greeting = "wellcome teacher";
      break;
    case "student":
      greeting = "wellcome student";
      break;
    case "staff":
      greeting = "wellcome staff";

      break;
    case "admin":
      greeting = "wellcome admin";
      break;
    default:
      greeting = "wellcome user";
      break;
  }
  return greeting;
}
console.log(wellcome("teacher"));
//===loops===
//===while loop==;

var j = 20; //condition
//initialization;
while (j < 30) {
  console.log(j);
  j++; //updation
}

var k = 10;
while (k < 20) {
  console.log(k);
  k++;
}

//==do while===
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

function shortCode(str) {
  let str2 = "";
  let arr = str.split(" "); // split the input string into an array of words
  for (let i = 0; i < arr.length; i++) {
    str2 += arr[i].charAt(0).toUpperCase(); // capitalize the first letter of each word
  }
  console.log(str2);
  return str2;
}

shortCode("This Is Java Demo");
