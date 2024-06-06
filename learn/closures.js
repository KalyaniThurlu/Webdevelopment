//A closure is created when a function is defined inside another function, and the inner function retains access to the outer function's variables.
function outerFun() {
  let outervar = "i am outer fun";
  function innerFun() {
    return "give me innerfun" + outervar;
  }
  return innerFun;
}
const inner = outerFun();
console.log(inner());
//closures use with parametors
function createMultiplier(factor) {
  function multiplier(number) {
    return factor * number;
  }
  return multiplier;
}

// Create a multiplier function that multiplies by 2
var double = createMultiplier(2);

// Create a multiplier function that multiplies by 3
var triple = createMultiplier(3);

// Call the multiplier functions
var result1 = double(3);

var result2 = triple(3);

console.log(result1);

console.log(result2);

