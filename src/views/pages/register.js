export default () => {
  const registerTemplate = `
  <h1>Register</h1>
  <div id="id01" class="modal">
  <div id="registerContainer">
  <div id="imgContainer">
      <span id="closeModal" class="close" title="Close Modal">&times;</span>              
    </div>
     <div id="registerButtons">
      <button id="loginButton" class="introButtons">Login</button>
      <button id="signUpButton" class="introButtons">Sign Up</button>
    </div>
  <div id="registerContent">
  </div>
  `;

  let divRegister = document.createElement("div");
  divRegister.classList.add("divRegister");
  divRegister.innerHTML = registerTemplate;

  const imgContainer = divRegister.querySelector("#imgContainer");
  const loginButton = divRegister.querySelector("#loginButton");
  const signUpButton = divRegister.querySelector("#signUpButton");
  const registerContent = divRegister.querySelector("#registerContent");
  const registerButtons = divRegister.querySelector("#registerButtons");

  loginButton.addEventListener('click', () => {
      imgContainer.style.display = "block";
      registerButtons.style.display = "none";
      registerContent.textContent = "";
      
      const loginContent =  `   
        <div id="errorMessage"></div>         
        <label for="username" class="loginLabels">Username</label>
        <input type="text" id="emailLogin" placeholder="Enter Username" name="username" required>
    
        <label for="password" class="loginLabels">Password</label>
        <input type="password" id ="passwordLogin"placeholder="Enter Password" name="password" required>
    
          <button><a id="submitLogin" class="registerSubmit" >Login</a></button>
        <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me</label>`;
     
    
      registerContent.insertAdjacentHTML("beforeend", loginContent);

      const submitLogin = divRegister.querySelector("#submitLogin");
      submitLogin.addEventListener("click", () => {
          const valueInputText = divRegister.querySelector("#emailLogin").value;
          const valueInputPassword = divRegister.querySelector("#passwordLogin").value;
          const errorMessageElement = divRegister.querySelector("#errorMessage");
          firebase.auth().signInWithEmailAndPassword(valueInputText, valueInputPassword)
            .catch(function (error) {
              let errorMessage = error.message;
              errorMessageElement.innerHTML = errorMessage;            
            });
        });
  });

  signUpButton.addEventListener('click', () => {
      imgContainer.style.display = "block";
      registerButtons.style.display = "none";
      registerContent.textContent = "";

      let signUpContent = `
        <div id="errorMessage"></div>            
        <label for="username" class="loginLabels">Username</label>
        <input type="text" placeholder="Enter Username" name="username" required>
      
        <label for="email" class="loginLabels">Email</label>
        <input id="signUpEmail" type="text" placeholder="Enter Email" name="email" required>
      
        <label for="password" class="loginLabels"> Password</label>
        <input id="signUpPass" type="password" placeholder="Enter Password" name="password" required>
    
        <label for="password" class="loginLabels">Repeat Password</label>
        <input id="signUpRptPass" type="password" placeholder="Enter Password" name="password" required>
    
        <button><a id="signUpSubmit"class="registerSubmit" href="#/home">Sign Up</a></button>`;
      
      
      registerContent.insertAdjacentHTML("beforeend", signUpContent);
  });

  return divRegister;
  
};

/* agregar funciones desde controller, importando la funcion con import, dando evento y funcion
loginButton.addEventListener('click', login )
import login from "./controller/controller.js";
*/
/* 
const divContainer = document.getElementById("container");
const registerHeader = document.createElement("header");
registerHeader.classList.add("registerHeader");
registerHeader.innerHTML = "READ & TELL";
const divButtons = document.createElement("div");
const loginButton = document.createElement("button");
loginButton.classList.add("registerButton");
loginButton.setAttribute("id", "loginButton");
loginButton.innerText = "Login";
divButtons.appendChild(loginButton);
const signUpButton = document.createElement("button");
signUpButton.classList.add("registerButton");
signUpButton.setAttribute("id", "signUpButton");
signUpButton.innerText = "Sign Up";
divButtons.appendChild(signUpButton);
const divLoginPadre = document.createElement("div");
divLoginPadre.classList("registerModal");
divLoginPadre.setAttribute("id", "LoginModalPadre");
divContainer.appendChild(divLoginPadre);
const divLoginModal = document.createElement("div");
divLoginModal.classList.add("loginModal");
divLoginPadre.appendChild(divLoginModal);
const divModalImage = document.createElement("div");
divModalImage.classList.add("imgContainer");
divLoginModal.appendChild(divModalImage);
const closeSpan = 
*/

