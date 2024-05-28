function negtivePositive(num) {
  if (num > 0) {
    return "negtive";
  } else if (num < 0) {
    return "positive";
  } else {
    return "zero";
  }
}
console.log(negtivePositive(20));
console.log(negtivePositive(-2));

var nums = 20;

function printNum(num) {
  if (num % 2 == 0) {
    console.log(`this ${num}even`);
  } else {
    console.log(`this ${num}in odd`);
  }
}
printNum(21);

function elgiblity(age) {
  if (age >= 20) {
    return true;
  } else {
    return false;
  }
}
console.log(elgiblity(18));
function hi(nums) {
  let num = "typeofnum";
  switch (nums) {
    case 1:
      num = 20;
      break;
    case 2:
      num = 21;
      break;
    case 3:
      num = 22;
      break;
    case 4:
      num = 31;
      break;
    case 5:
      break;
    default:
      num = "this is wrong";
  }
  return num;
}
console.log(hi(4));
let k = 10;
while (k > 5) {
  console.log(k);
  k--;
}
let j = 5;
while (j < 10) {
  console.log(j);
  j++;
}
let f = 10;
