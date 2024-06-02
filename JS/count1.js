function ischeck() {
  var num = document.getElementById("oddeven").value;

  //alert("e");
  if (num % 2 === 0) {
    document.getElementById("showmsg").innerHTML = +num + "an evennumber";
  } else {
    document.getElementById("showmsg").innerHTML = +num + " oddnumber";
  }
}
