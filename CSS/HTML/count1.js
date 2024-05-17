function ischeck() {
  var num = document.getElementById("oddeven").value;
  for (let i = 0; i.lenght < 20; i++)
    //alert("e");
    if (num[i] % 2 === 0) {
      document.getElementById("showmsg").innerHTML = +num + "an evennumber";
    } else {
      document.getElementById("showmsg").innerHTML = +num + " oddnumber";
    }
}
