//====callback=====In simpler terms, a callback is like leaving a message for someone to call you back when they're done with their current task. It allows you to continue with your own task while waiting for the callback to be executed, typically with the result or status of the previous operation.
//=====ex1=====;
/*  function greet(name) {
                console.log("hello" + name);
              }
              function greeting(callback) {
                var name = "seetha";
                callback(name);
              }

              greeting(greet);*/
//===ex2=====
function fun1(name, callback) {
  var message = "hi" + name + "!";
  callback(message);
}
function fun2(message) {
  console.log(message);
}
fun1("madhu", fun2);
//====Asynchronous Callback====
function fetchData(callback) {
  setTimeout(function () {
    var data = "data  fetched in succfully";
    callback(data);
  }, 2000);
}
function processingData(data) {
  console.log("data proceesing" + data);
}
fetchData(processingData);
//=== Callback Hell (Nested Callbacks)=======

 function step1(callbak) {
        setTimeout(function () {
          console.log("step1 completed");
        }, 1000);
        callbak();
      }
      function step2(callbak) {
        setTimeout(function () {
          console.log("step2 completed");
          callbak();
        });
      }
      function step3() {
        setTimeout(function () {
          console.log("step3 completed");
        }, 2000);
      }
      step1(function () {
        step2(function () {
          step3();
        });
      });
   
