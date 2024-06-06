//=====ex1======
function outerFunn() {
  var outervariable = "i am outer var";
  function innerFunn() {
    return "return innerfuntion" + outervariable;
  }
  return innerFunn();
}
var results = outerFunn();
console.log(results);
//====ex2=====
var globalVariable = "I'm a global variable";

// Outer function
function outerFunction() {
  // Outer function variable
  var outerVariable = "I'm from the outer function";

  // Inner function
  function innerFunction() {
    // Inner function can access the outer and global variables
    return (
      "Inner Function: " +
      outerVariable +
      " | Global Variable: " +
      globalVariable
    );
  }

  // Call the inner function
  return innerFunction();
}

// Call the outer function
var result2 = outerFunction();

// Display the result
console.log(result2);
