var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var btn = document.getElementById("btn");
var nameEl = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
// var element = document.getElementById('nameError');
// var element = document.getElementById('emailError');
// var element = document.getElementById('passwordError');

function submitForm(param) {
  param.preventDefault();
  var nameValue = nameEl.value;
  var emailValue = email.value;
  var passwordValue = password.value;

  // Name Field
  if (nameValue.trim() === "") {
    showError("nameError", "Name is Required");
    return;
  }

  // Email Field
  var isValidEmail = emailPattern.test(emailValue);
  if (isValidEmail === false) {
    showError("emailError", "Email must be valid");
    return;
  }

  // Password Field
  if (passwordValue.trim().length < 6) {
    showError("passwordError", "Password should be atleast 6 characters long");
    return;
  }

  // Google Form URL
}
btn.addEventListener("click", submitForm);

function showError(id, errorMessage) {
  var element = document.getElementById(id);
  element.innerHTML = errorMessage;
}

function clearAllError() {
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");

  nameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
}
