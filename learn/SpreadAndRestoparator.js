//==spread oparator=====
const fruits = ["mango", "apple", "banana"];
const moreFruits = ["kiwi", "strawberry", ...fruits];
console.log(moreFruits);
const person = { name: "latha", di: 20 };
const newPerson = { ...person, city: "Ap" };
console.log(newPerson);
//===rest oparator====
function showNumbers(...numbers) {
  console.log("print numbers:", numbers);
}
showNumbers(1, 2, 3, 4, 5);
