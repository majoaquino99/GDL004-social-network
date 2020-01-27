import { elements } from "../views/routes.js";
import { firebaseAuth } from "../model/firebase-auth.js";
/* import Register from "./pages/registerv2.js"; */

export const controller = {   


changeTemp: (hash) => {
    const mainSection = document.getElementById("container");
    mainSection.innerHTML = "";

    switch (hash) {
        case "":
        case "#":
        case "#/":
        case "#/register":
            return mainSection.appendChild(elements.register())
        case "#/home":
            mainSection.appendChild(elements.home())
        case "#/profile":
            mainSection.appendChild(elements.profile())
            break;
        default:
            return mainSection.appendChild(elements.different())
    }
  }
}

/* export const signUp = () => {
  const valueInputEmail = registerDivElement.querySelector("#emailLogin").value;
  const valueInputPassword = registerDivElement.querySelector("#passwordLogin").value;
  const errorMessageElement = registerDivElement.querySelector("#errorMessage");
  firebase.auth().createUserWithEmailAndPassword(valueInputEmail, valueInputPassword)
    .catch(function (error) {
      let errorMessage = error.message;
      errorMessageElement.innerHTML = errorMessage;
      history.pushState("home.js", "home", "#/home");
      window.history.go();      
    });

} */

/*  export const login = () => {
        firebase.auth().signInWithEmailAndPassword(emaillogin, passwordlogin)
          .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorMessage);
          });

    
}  */
