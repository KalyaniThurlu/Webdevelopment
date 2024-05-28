function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "") {
    alert("enter your name");
  } else if (password === trim()) {
    alert("must and should 6 characters");
  } else {
    alert("please enter this form");
  }
}
