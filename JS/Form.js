document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate username and password (simple validation for demonstration)
    if (username === "admin" && password === "password") {
      // Successful login
      alert("Login successful!");
      // You can redirect to another page or perform other actions here
    } else {
      // Display error message
      document.getElementById("error").textContent =
        "Invalid username or password";
    }
  });
