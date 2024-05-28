const person = [
  { name: "suma", Dob: 1992 },
  { name: "Geetha", Dob: 1989 },

  { name: "siri", Dob: 2000 },
];
const currentyear = new Date().getFullYear();
for (let persons of person) {
  persons.age = currentyear - persons.Dob;
}
console.table(person);
