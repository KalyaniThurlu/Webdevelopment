let arry = [1, 2, 3, 4, 5];
let exarry = arry.pop();
console.log(arry);
let Arry = [1, 0, 3, 4, 5, 2];
let exArry = Arry.push(9);
console.log(Arry);
let frt = ["banana", "apple", "grapes"];
let exfrt = frt.shift();
console.log(frt);
let fruits = ["guvo", "mango", "banana"];
let exfruits = fruits.unshift("watermillon");
console.log(fruits);
let exfilter = [1, 7, 6, 5, 4, 3, 2];
let rst = exfilter.filter(function (e) {
  return e % 2 === 0;
});
console.log(rst);
let exmap = [
  { name: "latha", id: 100 },
  { name: "geetha", id: 1002 },
  { name: "suma", id: 1003 },
];
let names = exmap.map(function (v) {
  return v.id;
});
console.log(names);
let exforeach = ["apple", "orange", "guava", "banana"];
let Frt = exforeach.forEach(function (c) {
  console.log(")" + c);
});
let veg = ["bringel", "ledifinger", "onion", "mirchi"];
let exveg = veg.join("*");
console.log(exveg);
let std = "this is my first programme";
let exstd = std.slice(5 - 12);
console.log(exstd);
let student = ["latha", "preethi", "mahima", "suma", "ramana"];
let orr = student.splice(1 - 3);
console.log(orr);
let Veg = ["mirchi", "onion", "bringel", "ledifinger"];
let exFrt = ["orange", "mango", "banana", "grapes"];
let conbained = Veg.concat(exFrt);
console.log(conbained);
//=====String Methods=======
let word = "hello";
let exword = word.toUpperCase();
console.log(exword);

let Sentence = "THIS IS MY FIRST PROGRAMME";
let exsentences = Sentence.toLowerCase();
console.log(exsentences);

let subject = ["telugu", "hindhi", "english"];
let exsubject = subject.includes("hindhi");
console.log(exsubject);

let world = ["kalyani      hello"];
let exworld = word.replace("hello", "hi");
console.log(exworld);
let sen = ["this is my first  class"];
let namess = "        madhu";
let exnamess = namess.trimStart();
console.log(exnamess);
let Name = "suma       ";
let exName = Name.trimEnd();
console.log(exName);
let Std = "hello";
let exStd = Std.charAt();
console.log(exStd);
