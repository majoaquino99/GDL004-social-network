import { signUp, login, signUpFacebook, signUpGoogle } from "../../controller/controller.js";


export default () => {
    const registerTemplate = `
      <div class="imagesContainer">  
      <div><img src="/src/images/1.jpg" width="90%"/><img src="/src/images/7.jpg" width="90%"/><img src="/src/images/13.jpg" width="90%"></div>
      <div><img src="/src/images/2.jpg" width="90%"/><img src="/src/images/8.jpg" width="90%"/><img src="/src/images/14.jpg" width="90%"></div>
      <div><img src="/src/images/3.jpg" width="90%"/><img src="/src/images/9.jpeg" width="90%"/><img src="/src/images/15.jpg" width="90%"></div>
      <div><img src="/src/images/4.jpg" width="90%"/><img src="/src/images/10.jpg" width="90%/"><img src="/src/images/16.jpg" width="90%"></div>
      <div><img src="/src/images/5.jpg" width="90%"/><img src="/src/images/11.png" width="90%"/><img src="/src/images/17.jpg" width="90%"></div>
      <div><img src="/src/images/6.jpg" width="90%"/><img src="/src/images/12.jpg" width="90%"/><img src="/src/images/18.jpg" width="90%"></div>    
    </div>  
        <div id="registerContainer">
          <div id="registerButtons">
            <div id="imgRegister">
             <img id="logoImageRegister" src="/src/images/logo-negro.png" style="size: 20px"></img>
            </div>
            <p id="registerP">Where books find bookslovers, and booklovers find each other</p>
            <button id="loginButton" class="introButtons">Login</button>
            <button id="signUpButton" class="introButtons">Sign Up</button>
          </div>
          <div id="loginForm" class="modal" style="display: none;">
              <span id="closeModalLogin" class="close" title="Close Modal">&times;</span>              
                     
              <label for="email" class="loginLabels">Email</label>
              <input type="email" id="emailLogin" placeholder="Enter Email" name="email" required>
          
              <label for="password" class="loginLabels">Password</label>
              <input type="password" id ="passwordLogin"placeholder="Enter Password" name="password" required>
              <div id="errorMessageLogin"></div>  
          
              <button id="submitLogin" class="introButtons" >Login</button>
          </div>
          <div id="signUpForm" class="modal" style="display: none;">
            <span id="closeModalSignUp" class="close" title="Close Modal">&times;</span>             
            <label for="username" class="loginLabels">Username</label>
            <input type="text" placeholder="Enter Username" name="username" required>
          
            <label for="email" class="loginLabels">Email</label>
            <input id="signUpEmail" type="email" placeholder="Enter Email" name="email" required>
          
            <label for="password" class="loginLabels"> Password</label>
            <input id="signUpPass" type="password" placeholder="Enter Password" name="password" required>
            <div id="errorMessageSignUp"></div> 
            <button id="facebookSignUp" class="introButtons">Sign up with Facebook</button>
            <button id="googleSignUp" class="introButtons">Sign up with Google</button>
            <button id="signUpSubmit"class="introButtons">Sign Up</button>
          </div>
        </div>
   `;
    

    let divRegister = document.createElement("div");
    divRegister.classList.add("divRegister");
    divRegister.innerHTML = registerTemplate;
   
    const loginButton = divRegister.querySelector("#loginButton");
    const signUpButton = divRegister.querySelector("#signUpButton");
    const closeModalLogin = divRegister.querySelector("#closeModalLogin");
    const closeModalSignUp = divRegister.querySelector("#closeModalSignUp");

    closeModalLogin.addEventListener("click", );
    closeModalSignUp.addEventListener("click", () => {
      const signUpForm = document.querySelector("#signUpForm");
      const divBtns = document.querySelector("#registerButtons");

      signUpForm.style.display = "none";
      divBtns.style.display = "block";    

    });
    

    loginButton.addEventListener('click', () => {
      const loginForm = document.querySelector("#loginForm");
      const divBtns = document.querySelector("#registerButtons");

      loginForm.style.display = "block";
      divBtns.style.display = "none";
        
    });

   signUpButton.addEventListener('click', () => {
      const signUpForm = document.querySelector("#signUpForm");
      const divBtns = document.querySelector("#registerButtons")

      signUpForm.style.display = "block";
      divBtns.style.display = "none";
    }); 

    const submitSignUp = divRegister.querySelector("#signUpSubmit");
    submitSignUp.addEventListener("click", signUp);

    const submitLogin = divRegister.querySelector("#submitLogin");
    submitLogin.addEventListener("click", login);

    const facebookSignUp = divRegister.querySelector("#facebookSignUp");
    facebookSignUp.addEventListener("click", signUpFacebook);

    const googleSignUp = divRegister.querySelector("#googleSignUp");
    googleSignUp.addEventListener("click", signUpGoogle);

    return divRegister;
    

};

/* agregar funciones desde controller, importando la funcion con import, dando evento y funcion
loginButton.addEventListener('click', login )
import login from "./controller/controller.js"; */
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

