//Login page js code:
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Email or Password must not be empty!");
  } else if (email === "sontan@baap.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("Email or Password is not correct!");
  }
});
