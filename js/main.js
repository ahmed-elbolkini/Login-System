// function validateUsername(username) {
//   var reSpaces = /^\S+$/;
//   return reSpaces.test(username);
// }

// function validateEmail(email) {
//   var re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
//   return re.test(email);
// }

// function validatePassword(password) {
//   var re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/;
//   return re.test(password);
// }

// document.querySelector("#email").addEventListener("blur", function () {
//   validateEmail(document.querySelector("#email").value);
// });

// document.querySelector("#password").addEventListener("blur", function () {
//   validatePassword(document.querySelector("#password").value);
// });

// document.querySelector("#username").addEventListener("blur", function () {
//   validateUsername(document.querySelector("#username").value);
// });

// document.querySelector("button").addEventListener("click", function () {
//   validateEmail(document.querySelector("#email").value);
//   validateUsername(document.querySelector("#username").value);
//   validatePassword(document.querySelector("#password").value);
//   collectUserData();
// });

// (function () {
//   var forms = document.querySelectorAll(".needs-validation");

//   for (let form of forms) {
//     form.addEventListener(
//       "submit",
//       function (event) {
//         if (
//           !validateEmail(document.querySelector("#email").value) ||
//           !validateUsername(document.querySelector("#username").value) ||
//           !validatePassword(document.querySelector("#password").value) ||
//           !form.checkValidity()
//         ) {
//           event.preventDefault();
//           event.stopPropagation();
//         } else {
//           form.classList.add("was-validated");
//         }
//       },
//       false
//     );
//   }
// })();

// var userData = [];

// function isEmailAlreadySignedUp(email) {
//   var lowerCaseEmail = email.toLowerCase();
//   var storedUserData = JSON.parse(localStorage.getItem("userData")) || [];

//   for (var i = 0; i < storedUserData.length; i++) {
//     if (storedUserData[i].email.toLowerCase() === lowerCaseEmail) {
//       return true; // Email is already signed up
//     }
//   }
//   return false; // Email is not signed up
// }

// function collectUserData() {
//   var userNameSignUp = document.querySelector("#username").value;
//   var emailSignUp = document.querySelector("#email").value;
//   var passwordSignUp = document.querySelector("#password").value;

//   document.getElementById("isEmpty").innerHTML = "";
//   document.getElementById("usernameError").innerHTML = "";
//   document.getElementById("emailError").innerHTML = "";
//   document.getElementById("passwordError").innerHTML = "";

//   if (userNameSignUp == "" || emailSignUp == "" || passwordSignUp == "") {
//     document.getElementById(
//       "isEmpty"
//     ).innerHTML = `<p class="text-danger">All inputs are required</p>`;
//   } else if (isEmailAlreadySignedUp(emailSignUp)) {
//     document.getElementById(
//       "isEmpty"
//     ).innerHTML = `<p class="text-danger">Email already exists</p>`;
//   } else {
//     var userDataObject = {
//       name: userNameSignUp,
//       email: emailSignUp,
//       pass: passwordSignUp,
//     };

//     var storedUserData = JSON.parse(localStorage.getItem("userData"));
//     if (storedUserData == null) {
//       storedUserData = [];
//     }
//     storedUserData.push(userDataObject);

//     localStorage.setItem("userData", JSON.stringify(storedUserData));

//     console.log(storedUserData);
//     clearInputs();
//   }
// }

// function clearInputs() {
//   document.querySelector("#username").value = "";
//   document.querySelector("#email").value = "";
//   document.querySelector("#password").value = "";
//   document.querySelector("#password").classList.remove("is-valid");
//   document.querySelector("#email").classList.remove("is-valid");
//   document.querySelector("#username").classList.remove("is-valid");
// }

// .............................................................

document.querySelector("button").addEventListener("click", collectUserData);

document.querySelector("#email").addEventListener("blur", validateEmail);

document.querySelector("#password").addEventListener("blur", validatePassword);

document.querySelector("#username").addEventListener("blur", validateUsername);

function validateUsername(e) {
  var username = document.querySelector("#username");
  var reSpaces = /^\S+$/;
  if (reSpaces.test(username.value)) {
    username.classList.remove("is-invalid");
    username.classList.add("is-valid");
    return true;
  } else {
    username.classList.remove("is-valid");

    username.classList.add("is-invalid");
    return false;
  }
}

function validateEmail(e) {
  var email = document.querySelector("#email");
  var re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

  if (re.test(email.value)) {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");

    return true;
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");

    return false;
  }
}

function validatePassword(e) {
  var password = document.querySelector("#password");
  var re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/;
  if (re.test(password.value)) {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");

    return true;
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");

    return false;
  }
}

(function () {
  var forms = document.querySelectorAll(".needs-validation");

  for (let form of forms) {
    form.addEventListener(
      "submit",
      function (event) {
        if (
          !form.checkValidity() ||
          !validateEmail() ||
          !validateUsername() ||
          !validatePassword()
        ) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          form.classList.add("was-validated");
        }
      },
      false
    );
  }
})();

var userData = [];

// Function to check if the email is already signed up
function isEmailAlreadySignedUp(email) {
  var lowerCaseEmail = email.toLowerCase();
  var storedUserData = JSON.parse(localStorage.getItem("userData")) || [];

  for (var i = 0; i < storedUserData.length; i++) {
    if (storedUserData[i].email.toLowerCase() === lowerCaseEmail) {
      return true; // Email is already signed up
    }
  }
  return false; // Email is not signed up
}

// Function to collect user data
function collectUserData() {
  console.log("click");
  var userNameSignUp = document.querySelector("#username").value;
  var emailSignUp = document.querySelector("#email").value;
  var passwordSignUp = document.querySelector("#password").value;

  // Clear previous error message
  document.getElementById("isEmpty").innerHTML = "";

  if (userNameSignUp == "" || emailSignUp == "" || passwordSignUp == "") {
    document.getElementById(
      "isEmpty"
    ).innerHTML = `<p class="text-danger">All inputs are required</p>`;
  } else if (isEmailAlreadySignedUp(emailSignUp)) {
    document.getElementById(
      "isEmpty"
    ).innerHTML = `<p class="text-danger">Email already exists</p>`;
  } else {
    var userDataObject = {
      name: userNameSignUp,
      email: emailSignUp,
      pass: passwordSignUp,
    };

    // Retrieve existing user data from local storage
    var storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData == null) {
      storedUserData = [];
    }
    storedUserData.push(userDataObject);

    // Store updated user data back to local storage
    localStorage.setItem("userData", JSON.stringify(storedUserData));

    console.log(storedUserData);
    clearInputs();
  }
}

function clearInputs() {
  document.querySelector("#username").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  password.classList.remove("is-valid");
  email.classList.remove("is-valid");
  username.classList.remove("is-valid");
}
// ......................................................

// Validation functions (place them first)
// function validateUsername(e) {
//   var username = document.querySelector("#username");
//   var reSpaces = /^\S*$/;
//   if (reSpaces.test(username.value)) {
//     username.classList.remove("is-invalid");
//     username.classList.add("is-valid");
//     return true;
//   } else {
//     username.classList.remove("is-valid");

//     username.classList.add("is-invalid");

//     return false;
//   }
// }

// function validateEmail(e) {
//   var email = document.querySelector("#email");
//   var re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

//   if (re.test(email.value)) {
//     email.classList.remove("is-invalid");
//     email.classList.add("is-valid");

//     return true;
//   } else {
//     email.classList.add("is-invalid");
//     email.classList.remove("is-valid");

//     return false;
//   }
// }

// function validatePassword(e) {
//   var password = document.querySelector("#password");
//   var re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/;
//   if (re.test(password.value)) {
//     password.classList.remove("is-invalid");
//     password.classList.add("is-valid");

//     return true;
//   } else {
//     password.classList.add("is-invalid");
//     password.classList.remove("is-valid");

//     return false;
//   }
// }

// (function () {
//   var forms = document.querySelectorAll(".needs-validation");

//   for (let form of forms) {
//     form.addEventListener(
//       "submit",
//       function (event) {
//         // Validation checks before form validity
//         if (
//           !validateEmail() ||
//           !validateUsername() ||
//           !validatePassword() ||
//           !form.checkValidity()
//         ) {
//           event.preventDefault();
//           event.stopPropagation();
//         } else {
//           form.classList.add("was-validated");
//         }
//       },
//       false
//     );
//   }
// })();

// var userData = [];

// // Function to check if the email is already signed up
// function isEmailAlreadySignedUp(email) {
//   var lowerCaseEmail = email.toLowerCase();
//   var storedUserData = JSON.parse(localStorage.getItem("userData")) || [];

//   for (var i = 0; i < storedUserData.length; i++) {
//     if (storedUserData[i].email.toLowerCase() === lowerCaseEmail) {
//       return true; // Email is already signed up
//     }
//   }
//   return false; // Email is not signed up
// }

// // Function to collect user data
// function collectUserData() {
//   var userNameSignUp = document.querySelector("#username").value;
//   var emailSignUp = document.querySelector("#email").value;
//   var passwordSignUp = document.querySelector("#password").value;

//   // Clear previous error message
//   document.getElementById("isEmpty").innerHTML = "";

//   if (userNameSignUp == "" || emailSignUp == "" || passwordSignUp == "") {
//     document.getElementById(
//       "isEmpty"
//     ).innerHTML = `<p class="text-danger">All inputs are required</p>`;
//   } else if (isEmailAlreadySignedUp(emailSignUp)) {
//     document.getElementById(
//       "isEmpty"
//     ).innerHTML = `<p class="text-danger">Email already exists</p>`;
//   } else {
//     var userDataObject = {
//       name: userNameSignUp,
//       email: emailSignUp,
//       pass: passwordSignUp,
//     };

//     // Retrieve existing user data from local storage
//     var storedUserData = JSON.parse(localStorage.getItem("userData"));
//     if (storedUserData == null) {
//       storedUserData = [];
//     }
//     storedUserData.push(userDataObject);

//     // Store updated user data back to local storage
//     localStorage.setItem("userData", JSON.stringify(storedUserData));

//     console.log(storedUserData);
//   }
// }
