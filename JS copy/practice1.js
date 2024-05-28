function change() {
  // alert("hello");

  var num = document.getElementById("oddeven").value;
  if (num % 2 === 0) {
    document.getElementById("showmsg").innerHTML = "is evenum";
  } else {
    document.getElementById("showmsg").innerHTML = "is odd";
  }
}
