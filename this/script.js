function greet() {
  console.log(this.name);
}

const person = {
  name: "Alice",
};

greet.call(person); // Logs "Alice"
greet.apply(person); // Logs "Alice"

const boundGreet = greet.bind(person);
boundGreet(); // Logs "Alice"
