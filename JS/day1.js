function validateForm(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  usernameError.textContent = "";
  passwordError.textContent = "";

  if (username.trim() === "") {
    usernameError.textContent = "Username is required";
    return;
  }

  if (password.trim() === "") {
    passwordError.textContent = "Password is required";
    return;
  }

  console.log("Username:", username);
  console.log("Password:", password);
}
