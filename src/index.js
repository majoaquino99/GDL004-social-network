import { example } from './example.js';

example();

let modalLogin = document.getElementById("id01");
let modalSignUp = document.getElementById("id02");
let closeModalLogin = document.getElementById("closeModalLoginIn");
let closeModalSignUp = document.getElementById("closeModalSignUp");
let loginButton = document.getElementById("loginButton");
let signUpButton = document.getElementById("signUpButton");
let submitSignUpElement = document.getElementById("submitSignUp");
let submitloginElement = document.getElementById("submitLogin");

loginButton.addEventListener("click", () => {
  modalLogin.style.display = "block";
});

closeModalLogin.addEventListener("click", () => {
  modalLogin.style.display = "none";
});
signUpButton.addEventListener("click", () => {
  modalSignUp.style.display = "block";
});

closeModalSignUp.addEventListener("click", () => {
  modalSignUp.style.display = "none";
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(email);
  } else {
    document.getElementById("msj").innerHTML="Sin cuenta, Por Favor Registrate"
  }
});

submitSignUpElement.addEventListener("click", () => {
  let emailSignUp = document.getElementById("emailSignUp").value;
  let passwordSignUp = document.getElementById("passwordSignUp").value;
  console.log("email:" + emailSignUp, "password" + passwordSignUp);
  firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
    .catch(function (error) {
      //console.log("entro a la funcion");
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
});

submitloginElement.addEventListener("click", () => {
  let emaillogin = document.getElementById("loginUsername").value;
  let passwordlogin = document.getElementById("loginPass").value;
  firebase.auth().signInWithEmailAndPassword(emaillogin, passwordlogin)
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
  
});

