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
//print in 5 table revers from 100 to 1
for (let i = 100; i >= 0; i--) {
  if ([i] % 5 === 0) {
    console.log(i);
  }
}
//print in odd nums 1 to 100
for (let j = 0; j <= 100; j++) {
  if ([j] % 2 !== 0) {
    console.log(j);
  }
}
//print in even 1 to 100
for (let i = 0; i <= 100; i++) {
  if ([i] % 2 === 0) {
    console.log(i);
  }
}

//take array[2,3,5,6,8,9]print all elements print all elements of using forloop
let arr = [2, 3, 5, 6, 8, 9];
for (let i = 0; i < arr.length; i++) {
  //for of

  for (let i of arr) {
  }
  console.log(i);
}
let Arr = [1, 4, 7, 3, 2, 9, 6, 8];
for (let i = 0; i < Arr.length; i++) {
  //for in used loop

  for (let i in Arr) {
  }
  console.log(i);
}
function countCharacters(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;
  let spaceCount = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char === " ") {
      spaceCount++;
    } else {
      consonantCount++;
    }
  }

  return {
    vowels: vowelCount,
    consonants: consonantCount,
    spaces: spaceCount,
  };
}

const inputString = "Hello World";
const charCount = countCharacters(inputString);
console.log(charCount);

function countStr(str) {
  let vowels = 0;
  let consonants = 0;
  let spaces = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toUpperCase();

    if (
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      vowels++;
    } else if (char >= "A" && char <= "Z") {
      consonants++;
    } else if (char === " ") {
      spaces++;
    }
  }

  return {
    vowels: vowels,
    consonants: consonants,
    spaces: spaces,
  };
}

const str = "Welcome to JavaScript"; // Example string
const counts = countStr(str); // Call the function and get the counts

console.log("String:", str);
console.log("Vowels:", counts.vowels);
console.log("Consonants:", counts.consonants);
console.log("Spaces:", counts.spaces);
let vin = "hello";
console.log(vin.toUpperCase());
let exvin = "HELLO";
let jan = "this is java script";
console.log(jan.charAt("3"));
let exjan = "wellcome";
console.log(exjan.indexOf("e"));
let Exjan = "wellcome";
console.log(Exjan.lastIndexOf("e"));
let exmy = "this is js";
console.log(exmy.split("i"));
let name = "kalyani";
console.log(name.split("").reverse().join(""));
let mname = "this is";
console.log(mname.replace("this", "hello"));
let bb = "   wellcome     ";
console.log(bb.trim());
let bg = "          wellcome";
console.log(bg.trimStart());
let df = "           hi";
console.log(df.trimEnd());
