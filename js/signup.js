var userName = document.querySelector("#username");
var emailAdress = document.querySelector("#email");
var password = document.querySelector("#password");

var userData;
if (localStorage.getItem("userData") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userData"));
}

function validateUsername() {
  var reSpaces = /^\S+$/;
  if (reSpaces.test(userName.value) && userName.value != "") {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    return true;
  } else {
    userName.classList.remove("is-valid");
    userName.classList.add("is-invalid");

    return false;
  }
}

function validateEmail() {
  var re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

  if (re.test(emailAdress.value) && emailAdress.value != "") {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");

    return true;
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");

    return false;
  }
}

function validatePassword() {
  var re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/;
  if (re.test(password.value) && password.value != "") {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");

    return true;
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");

    return false;
  }
}

// Function to check if the email is already signed up
function isEmailAlreadySignedUp() {
  var lowerCaseEmail = emailAdress.value.toLowerCase();

  for (var i = 0; i < userData.length; i++) {
    if (userData[i].email.toLowerCase() === lowerCaseEmail) {
      document.getElementById(
        "isEmpty"
      ).innerHTML = `<p class="text-danger">Email already exists</p>`;
      return true; // Email is already signed up
    }
  }

  document.getElementById("isEmpty").innerHTML = "";
  return false; // Email is not signed up
}

function collectUserData(event) {
  event.preventDefault();
  if (
    validateEmail() == true &&
    validateUsername() == true &&
    validatePassword() == true &&
    isEmailAlreadySignedUp() == false
  ) {
    var userDataObject = {
      name: userName.value,
      email: emailAdress.value,
      pass: password.value,
    };

    userData.push(userDataObject);
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(userData);

    document.getElementById(
      "isEmpty"
    ).innerHTML = `<p class="text-success">Success</p>`;

    clearInputs();
  }
}

var userNameLogin = localStorage.getItem("sessionUsername");

function signIn(event) {
  event.preventDefault();

  var emailSignin = document.getElementById("emailSignin");
  var passwordSignin = document.getElementById("passwordSignin");

  if (emailSignin.value === "" || passwordSignin.value === "") {
    document
      .getElementById("warningMsg")
      .classList.replace("d-none", "d-block");
    return;
  }

  var userFound = false;

  for (let i = 0; i < userData.length; i++) {
    if (
      userData[i].email.toLowerCase() === emailSignin.value.toLowerCase() &&
      userData[i].pass === passwordSignin.value
    ) {
      localStorage.setItem("sessionUsername", userData[i].name);
      userFound = true;
      break; // Exit the loop if a matching user is found
    }
  }

  if (userFound) {
    window.location.href = "home.html";
  } else {
    document.getElementById("wrongMsg").classList.replace("d-none", "d-block");
  }
}

function welcomeUser() {
  document.getElementById("usernameWelcome").innerHTML =
    "Welcome " + userNameLogin;
}

function logOut() {
  document.getElementById("logout").setAttribute("href", "sginin.html");
  localStorage.removeItem("sessionUsername");
}
