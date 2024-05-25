class student {
  name;
  age;
  subject;
  section;
  constructor(a, b, c, d) {
    this.name = a;
    this.age = b;
    this.subject = c;
    this.section = d;
  }
  print() {
    console.log(
      `${this.name}` +
        "" +
        `${this.age}` +
        "" +
        `${this.subject}` +
        "" +
        `${this.section}`
    );
  }
}
function inc(x) {
  return ++x;
}
function fun(a) {
  return a + "is js";
}
export { student, inc };
export default fun;
