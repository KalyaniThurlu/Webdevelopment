//======Arraymethods======
let arr = [1, 2, 2, 3, 4, 5];
console.log(arr.push(7), arr);
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.pop(), arr1);
let arr3 = ["latha", "suma", "rama", "praba"];
console.log(arr3.shift(), arr3);
let arr4 = ["geetha", "suma", "rama"];
console.log(arr4.unshift("sumana"), arr4);
let arr5 = ["padhma", "pooji", "suma", "banu"];
console.log(arr5.indexOf("pooji"), arr5);
let arr6 = ["latha", "suma", "getha", "vimala"];
console.log(arr6.lastIndexOf("getha"), arr6);
let arr7 = ["banana", "apple", "mango"];
console.log(arr7.includes("apple"), arr7);
let fruit = "this is first programme";
console.log(fruit.split("i"), fruit);
let books = ["telugu", "english", "hidhi", "macth"];
console.log(books.slice(1 - 3), books);
let myfavarate = ["padhama", "pavi", "madhu"];
let myfavarate1 = [1, 2, 4, 5, 6];
let combained = myfavarate.concat(myfavarate1);
console.log(combained);
let exmple = [1, 2, 3, 4, 5];
let example1 = exmple.forEach(function (e) {
  console.log(e + "*");
});
let fruits = [
  { name: "mango", id: 1200 },
  { name: "grapes", id: 1300 },
  { name: "bopaya", id: 1400 },
];
let fruits1 = fruits.map(function (v) {
  return v.id;
});
console.log(fruits1);
let even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even1 = even.filter(function (e) {
  return e % 2 === 0;
});
console.log(even1);
//=====string methods=====
let str = "hello";
console.log(str.toUpperCase());
let str2 = "HELLO";
console.log(str2.toLowerCase());
let str3 = ["banana", "mango", "apple"];
console.log(str3.includes("mango"));
let str4 = ["mango", "banana", "apple", "orange"];
console.log(str4.includes("apple"));
let colors = ["black", "white", "red", "pink", "purple"];
console.log(colors.indexOf("pink"));
let str6 = "hello  kalyani";
console.log(str6.replace("hello", "hi"));
let str7 = "    wellcome ";
console.log(str7.trim());
let str8 = "      hello";
console.log(str8.trimStart());
let str9 = " hi          ";
