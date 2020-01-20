import { example } from './example.js';

example();

//todo esto iría en el js de login
let modalLogin = document.getElementById("id01");
let modalSignUp = document.getElementById("id02");
let closeModalLogin = document.getElementById("closeModalLoginIn");
let closeModalSignUp = document.getElementById("closeModalSignUp");
let loginButton = document.getElementById("loginButton");
let signUpButton = document.getElementById("signUpButton");
let submitSignUpElement = document.getElementById("submitSignUp");
let submitloginElement = document.getElementById("submitLogin");
let facebookSignUpButton = document.getElementById("facebookSignUp");
let googleSignUpButton = document.getElementById("googleSignUp");

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

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    let displayName = user.displayName;
    let email = user.email;
    let emailVerified = user.emailVerified;
    let photoURL = user.photoURL;
    let isAnonymous = user.isAnonymous;
    let uid = user.uid;
    let providerData = user.providerData;
  } else {
    document.getElementById("msj").innerHTML = "Sin cuenta, Por Favor Registrate"
  }
});

facebookSignUpButton.addEventListener("click", () => {

  let provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    let token = result.credential.accessToken;
    let user = result.user;
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
  });
});

googleSignUpButton.addEventListener("click", () => {
let provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  let token = result.credential.accessToken;
  let user = result.user;
}).catch(function(error) {
  let errorCode = error.code;
  let errorMessage = error.message;
  let email = error.email;
  let credential = error.credential; 
  });
});

submitSignUpElement.addEventListener("click", () => {
  let emailSignUp = document.getElementById("emailSignUp").value;
  let passwordSignUp = document.getElementById("passwordSignUp").value;
  firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorMessage);
    });
});

submitloginElement.addEventListener("click", () => {
  let emaillogin = document.getElementById("loginUsername").value;
  let passwordlogin = document.getElementById("loginPass").value;
  firebase.auth().signInWithEmailAndPassword(emaillogin, passwordlogin)
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorMessage);
    });
});