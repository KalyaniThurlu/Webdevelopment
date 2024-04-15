let arr = [1, 2, 3, 4, 5];
let exarr = arr.push(6);
console.log(arr);

let Arr = [1, 2, 3, 4, 5, 6];
let ExArr = Arr.pop();
console.log(Arr);

let books = ["thelugu", "english", "hindhi", "scince"];
let exbooks = books.shift();
console.log(books);

let student = ["latha", "madhu", "suma", "rama"];
let exstudent = student.unshift("padhma");
console.log(student);
let exstd = [1, 5, 7, 6, 4, 3, 2];
let example = exstd.filter(function (e) {
  return e % 2 === 0;
});
console.log(example);
let flowers = [
  { name: "latha", id: 1001 },
  { name: "geetha", id: 1002 },
  { name: "suma", id: 1003 },
];
let Ex = flowers.map(function (e) {
  return e.id;
});
console.log(Ex);
let flw = ["rose", "white", "pink", "yellow"];
let exflw = flw.forEach(function (e) {
  console.log("finding " + ")" + e);
});
let Add = ["telug", "hindhi", "english"];
let exAdd = Add.join("*");
console.log(exAdd);
let color = "hello janu";
let excolor = color.slice(3, 8);
console.log(excolor);
let clr = ["pink", "blue", "white", "red", "black"];
let exclr = clr.splice(1 - 3);
console.log(clr);
//======string Methods========
let str = "wellcome";
let exstr = str.toUpperCase();
console.log(exstr);
let string = "HELLO";
let exstring = string.toLowerCase();
console.log(exstring);
let Sub = ["telugu", "hindhi", "english"];
let exsub = Sub.includes("hindhi");
console.log(exsub);

let word = "hi kalyani";
let exword = word.replace("hi", "hello");
console.log(exword);

let sentence = "this is my first programme";
let exsentence = sentence.split("i");
console.log(exsentence);

let veg = "potato";
let exveg = veg.charAt(3);
console.log(exveg);

let world = "hello";
let exworld = world.substring(3);
console.log(exworld);

let indexof = ["madhu", "latha", "suma", "priya"];
let exindexof = indexof.indexOf("suma");
console.log(exindexof);
let names = ["mahima", "pavi", "Reshma", "Suma"];
let id = [1001, 1002, 1003];
let combaind = names.concat(id);
console.log(combaind);
