// methods1.js
class teacher {
  name;
  age;
  salary;
  subject;

  constructor(a, b, c, d) {
    this.name = a;
    this.age = b;
    this.salary = c;
    this.subject = d;
  }

  display() {
    console.log(
      `${this.age}` +
        " " +
        `${this.name}` +
        " " +
        `${this.salary}` +
        " " +
        `${this.subject}`
    );
  }
}

function inc(x) {
  return ++x;
}

export { inc, teacher };
