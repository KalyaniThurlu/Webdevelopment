//==spread oparator===spread or distribution ofelements
const arr = [1, 3, 4];
const arr2 = [...arr, 5, 6];
console.log(arr2);

function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
const obj = {
  name: "latah",
  age: 20,
};
const obj2 = { ...obj, salary: 1000 };
console.log(obj2);
//===Rest oparator=====collect multiple elements
function summ(...args) {
  return args.reduce((p, c) => p + c);
}
console.log(summ(2, 2, 3));
const [first, second, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(first);
console.log(second);
console.log(rest);
const object = ({ a, b, ...sum } = { a: 2, b: 3, c: 4, d: 5, e: 6 });
console.log(a);
console.log(b);
console.log(sum);
let mynum = [1, 2, 3];
let mynum1 = [...mynum, 6, 7, 8];
console.log(mynum1);
//===object destructure=======
const employee = {
  name: "Geetha",
  age: 22,
  id: 1001,
  salary: 1000,
};
const { name, age, id, salary } = employee;
console.log(id);
