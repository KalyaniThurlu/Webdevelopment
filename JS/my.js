let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.push(9), arr);
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.pop(2), arr1);
let rst = ["latha", "geetha", "seetha", "madhu"];
console.log(rst.shift("geetha"), rst);
let results = [
  { name: "seetha", id: 100 },
  { name: "rama", id: 102 },
  { name: "madhu", id: 222 },
];
const myrst = results.map(function (e) {
  return e.name;
});
console.log(myrst);
let names = [1, 2, 3, 4, 5, 6, 7, 8];
let mynames = names.filter(function (v) {
  return v % 2 === 0;
});
console.log(mynames);
let students = ["madhu", "mahi", "deepu", "likki"];
let my = students.forEach(function (e) {
  console.log("*" + e);
});
let color = "this my first class";
console.log(color.split("i"), color);
let colors = ["madhu", "mahima", "sumana", "preethi"];
console.log(colors.splice(2, 1), colors);
