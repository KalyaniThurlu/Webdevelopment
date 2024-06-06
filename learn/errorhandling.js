//===ex1=====
try {
  notExitingFun();
} catch (err) {
  console.error("fun is not exited:" + err.message);
}
//====ex2====
try {
  var X;
  console.log(X.toUpperCase());
} catch (error) {
  console.error("x is not declared:" + error.message);
}
