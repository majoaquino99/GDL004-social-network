import { login } from "../../controller/controller.js"; 
export default () => {

    const viewRegister = `
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
    

    const registerDivElement = document.createElement("div");
    registerDivElement.innerHTML = viewRegister;
   
    

    const imgContainer = registerDivElement.querySelector("#imgContainer");
    const loginButton = registerDivElement.querySelector("#loginButton");
    const signUpButton = registerDivElement.querySelector("#signUpButton");
    const registerContent = registerDivElement.querySelector("#registerContent");
    const registerButtons = registerDivElement.querySelector("#registerButtons");
   

    loginButton.addEventListener('click', () => {
      imgContainer.style.display = "block";
      registerButtons.style.display = "none";
      registerContent.textContent = "";
      
      const loginContent =  `            
        <label for="username" class="loginLabels">Username</label>
        <input type="text" id="emailLogin" placeholder="Enter Username" name="username" required>
    
        <label for="password" class="loginLabels">Password</label>
        <input type="password" placeholder="Enter Password" name="password" required>
    
          <button><a id="submitLogin" class="registerSubmit" href="#/home">Login</a></button>
        <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me</label>`;
     
    
      registerContent.insertAdjacentHTML("beforeend", loginContent);

      const loginDivElement = document.createElement("div");
      loginDivElement.innerHTML = loginContent;

      const submitLogin = loginDivElement.querySelector("#submitLogin")
      submitLogin.addEventListener("click", login)
    

    });

    



    signUpButton.addEventListener('click', () => {
      imgContainer.style.display = "block";
      registerButtons.style.display = "none";
      registerContent.textContent = "";

      let signUpContent = `
                  
        <label for="username" class="loginLabels">Username</label>
        <input type="text" placeholder="Enter Username" name="username" required>
      
        <label for="email" class="loginLabels">Email</label>
        <input type="text" placeholder="Enter Email" name="email" required>
      
        <label for="password" class="loginLabels"> Password</label>
        <input type="password" placeholder="Enter Password" name="password" required>
    
        <label for="password" class="loginLabels">Repeat Password</label>
        <input type="password" placeholder="Enter Password" name="password" required>
    
        <button><a id="sigUpSubmit"class="registerSubmit" href="#/home">Sign Up</a></button>`;
      
      
      registerContent.insertAdjacentHTML("beforeend", signUpContent);
    });



    return registerDivElement;
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

