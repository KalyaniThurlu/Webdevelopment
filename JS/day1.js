function validateForm(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username.trim() === "" || password.trim() === "") {
    alert("Please enter both username and password.");
    return false;
  }

  console.log("Login successful!");
}
