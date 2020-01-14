import { example } from './example.js';

example();

let modalLogin = document.getElementById("id01");
let modalSignUp = document.getElementById("id02");
let closeModalLogin = document.getElementById("closeModalLoginIn");
let closeModalSignUp = document.getElementById("closeModalSignUp");
let loginButton = document.getElementById("loginButton");
let signUpButton = document.getElementById("signUpButton");

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


