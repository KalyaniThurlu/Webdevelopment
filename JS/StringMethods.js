//=======String Methods========

var string = "js is easy lerning programme";

console.log(string.length);

var string1 = "wellcome";
console.log(string1.indexOf("l"));

var string2 = "hello world";
console.log(string2.lastIndexOf("p"));

var String3 = "hello";
console.log(String3.charAt(3));

var string4 = "this is my first class";
console.log(string4.toUpperCase());

var string5 = "THIS IS MY FIRST CLASS";
console.log(string5.toLowerCase());

var string6 = "hello";
console.log(string6.concat(" kalyani"));

var stringtrim = "   wellcome       ";
console.log(stringtrim.trim());
var stringtrimstart = "      hi  ";
console.log(stringtrimstart.trimStart());

var stringtrimend = "hello    ";
console.log(stringtrimend.trimEnd());
var spilt = "javascript class";
console.log(spilt.split("c"));

var string1 = "javascript";
var string2 = " easy learning";
var string3 = "programme";

var joinedString = string1 + string2 + string3;

console.log("find in join" + joinedString);

var str = "kalyani";
var reversedStr = str.split("").reverse().join("");
console.log(reversedStr);
var strreplaced = "hello janu";
console.log(strreplaced.replace("janu", "kalyani"));
var strslice = "latha , geetha, suma, rama        ";
console.log(strslice.slice(1, 10));
var rexp = "this is java script";
console.log(rexp.match(/[a-z]/));
