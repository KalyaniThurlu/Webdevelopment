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
///========Functionsinjs======
function myFun(a, b) {
  return a + b;
}
let RSt = myFun(2, 3);
console.log(RSt);

function Withoutparam() {
  return "hello";
}
let rr = Withoutparam();
console.log(rr);

function WithoutReturn() {
  console.log("wellcome");
}
WithoutReturn();
function WithOutreturnWithparam(name, id) {
  console.log(name + id);
}
WithOutreturnWithparam("kalyani", 1001);
const myfun = (a, b) => {
  return a + b;
};
console.log(myFun(29, 30));
const withoutparam = () => {
  return "hi";
};
console.log(withoutparam());
const withoutreturn = () => {
  console.log("this is my first programme");
};
withoutreturn();
const withparam = (a, b) => {
  console.log(a + b);
};
withparam(20, 20);
//=======ForLoop==========;
for (let i = 0; i <= 100; i++) {
  console.log("wellcome" + i);
}
for (let i = 2; i <= 2; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}
for (let i = 1; i <= 5; i++) {
  row = "";
  for (let j = i; j <= 5; j++) {
    row += "*";
  }
  console.log(row);
}
for (let i = 1; i <= 5; i++) {
  row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
let num = [1, 2, 3, 4, 5, 7, 6, 8, 9, 10];
let evennun = [];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    evennun.push(num[i]);
  }
}
console.log(evennun);

let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddnum = [];
for (let i = 0; i < Num.length; i++) {
  if (Num[i] % 2 !== 0) {
    oddnum.push(Num[i]);
  }
}
console.log(oddnum);

let expositivenum = [1, -2, 3, -4, -6, 5, -7, 8];
let Positive = [];
for (let i = 0; i < expositivenum.length; i++) {
  if (expositivenum[i] > 0) {
    Positive.push(expositivenum[i]);
  }
}
console.log(Positive);
let negtive = [1, -2, -3, 4, -5, 6, -7, 8, 9, 10];
let exnegtive = [];
for (let i = 0; i < negtive.length; i++) {
  if (negtive[i] < 0) {
    exnegtive.push(negtive[i]);
  }
}
console.log(exnegtive);
let exbignum = [10, 20, 30, 40, 50, 60, 100, 200];
let bignum = 20;
for (let i = 0; i < exbignum.length; i++) {
  if (exbignum[i] > bignum) {
    bignum = exbignum[i];
  }
}
console.log(bignum);
let exminnum = [1, 0, 3, 4, 6, 9, 8, 5, -1];
let minnum = 5;
for (let i = 0; i < exminnum.length; i++) {
  if (exminnum[i] < minnum) {
    minnum = exminnum[i];
  }
}
console.log(minnum);
const emp = [
  { name: "kalyani", id: 1001 },
  { name: "latha", id: 1002 },
  { name: "Geetha", id: 1003 },
];
console.table(emp.filter((e) => e.name.startsWith("l")));
const employee = [
  { name: "padhma", Dob: 1991 },
  { name: "mahima", Dob: 2002 },
  { name: "preethi", Dob: 2004 },
];
const currentyear = new Date().getFullYear();
for (let employees of employee) {
  employees.age = currentyear - employees.Dob;
}
console.table(employee);
//===logical oparetors======;
let a = 10,
  b = 20,
  c = 30;
const My = () => {
  if (a === b) {
    console.log("a is eqults to b");
  } else if (c > b) {
    console.log("c is greater than b");
  } else if (a > b || c == a) {
    console.log("a is lessthan b are c eqults to a");
  } else {
    console.log("All are wrong");
  }
};
My();
