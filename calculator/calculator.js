let cal = document.getElementById("diss");
function display(input) {
  cal.value += input;
}
function total() {
  cal.value = eval(cal.value);
}
function c() {
  
  
  
  cal.value = "";
}


