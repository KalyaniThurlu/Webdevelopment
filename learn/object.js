let obj = {
  name: "latha",
  age: 20,
  salary: 10000,
};
obj.id = 1001; //adding a new property
delete obj.age; //delete a property
console.log(obj);
//===Object Destructuring====
const person = {
  name: "suma",
  occupation: "teacher",
  id: 1002,
  salary: 20000,
};
const { name, occupation, id, salary } = person;
console.log(name);
