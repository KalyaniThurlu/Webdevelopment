class Parent {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  print() {
    console.log(this.name, this.id);
  }
}

const res = new Parent("Latha", 200);
res.print(); // Outputs: Latha 200

class Child extends Parent {
  constructor(name, id, age) {
    super(name, id); // Pass name and id to the parent class constructor
    this.age = age; // Assign age to the instance
  }
  print2() {
    console.log(this.age);
  }
}

const my = new Child("Latha", 200, 40); // Pass name, id, and age
my.print2(); // Outputs: 40
my.print(); // Outputs: Latha 200
