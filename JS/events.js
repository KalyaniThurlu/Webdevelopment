/*const grandparent = document.getElementById("grandparent");
grandparent.addEventListener("click", () => {
  stop:propagation();
  console.log("grandparent");
});
const parent = document.getElementById("parent");
parent.addEventListener("click", () => {
  console.log("parent");
});
const child = document.getElementById("child");
child.addEventListener("click", () => {
  console.log("child");
  capture = true;
});*/
//===bubble===means child to parent to grandparent  output
const grandparent = document.getElementById("grandparent");
grandparent.addEventListener("click", () => {
  console.log("grandparent ");
});
const parent = document.getElementById("parent");
parent.addEventListener("click", () => {
  console.log("parent");
});
const child = document.getElementById("child");
child.addEventListener("click", () => {
  console.log("child bubble");
});
