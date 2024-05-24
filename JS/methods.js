import { inc, teacher } from "./methods1.js"; /*let name = "geetha";
function x() {
  console.log("hi", this.name);
}
const obj = {
  name: "seetha",
  y: () => {
    console.log("hii", this.name);
  },
};
obj.y();
x();
*/
let obj2 = new teacher("seetha", "english", 20, 1000);
obj2.display();
console.log(inc(5));
