let arr = [1, 2, 3, 4];
let exarr = arr.push(5);
console.log(arr);

let Arr = [1, 2, 3, 4, 5];
let exArr = Arr.pop();
console.log(Arr);

let names = ["padhma", "latha", "preethi", "mahima"];
let exnames = names.shift();
console.log(names);

let fruits = ["apple", "banana", "guova", "grapes"];
let exfruits = fruits.unshift("mango");
console.log(fruits);

let Filter = [1, 2, 3, 4, 5, 6, 8, 9, 7, 10];
let ExFilter = Filter.filter(function (e) {
  return e % 2 === 0;
});
console.log(ExFilter);
let map = [
  { name: "sindhu", id: 1001 },
  { name: "pavithra", id: 1002 },
  { name: "sumana", id: 2002 },
];
let exmap = map.map(function (e) {
  return e.id;
});
console.log(exmap);
let veg = ["mirchi", "bringel", "onion"];
let frt = ["banana", "apple", "mango"];
let combaind = veg.concat(frt);
console.log(combaind);
let mobiles = ["vivo", "samsung", "mi", "red me"];
let ExForeach = mobiles.forEach(function (v) {
  console.log(")" + v);
});
let ExJoin = [1, 2, 3, 4, 5];
let rst = ExJoin.join("*");
console.log(rst);
let ExSlice = [1, 2, 3];
let results = ExSlice.slice(2);
console.log(results);

//===String Methods======
let ExTouppercase = "hello";
let ExStr = ExTouppercase.toUpperCase();
console.log(ExStr);

let ExTolowercase = "HEllo";
let Exstr = ExTolowercase.toLowerCase();
console.log(Exstr);

let ExIncludes = ["suma", "preethi", "lakshmi", "meera", "mahima"];
let exincludes = ExIncludes.includes("lakshmi");
console.log(exincludes);

let ExReplace = ["kalyani", "Geetha"];
let ExIndexof = ["darani", "sumana", "preethi", "vimala", "padhma"];
let exstr = ExIndexof.indexOf("preethi");
console.log(exstr);

let Exlastindexof = ["banana", "apple", "mango", "grapes"];
let Results = Exlastindexof.lastIndexOf("grapes");

console.log(Results);
let Exsplit = "this is my first programme";
let Answer = Exsplit.split("i");
console.log("findingnums" + Answer);
let ExTrimstart = "     hello";
let Extrim = ExTrimstart.trimStart();
console.log(Extrim);

let str = "   Hello, World!   ";
let trimmedStr = str.trimEnd();

console.log(trimmedStr);
const sentence = "Hello, World!";
const newStr = sentence.replace("Hello", "Hi");

console.log(newStr);
