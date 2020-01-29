import { elements } from "../views/routes.js";

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
            break;
        case "#/profile":
            mainSection.appendChild(elements.profile())
            break;
        default:
            return mainSection.appendChild(elements.different())
    }
  }
}
    export const signUp = () => {    
      let valueInputTextL = document.getElementById("signUpEmail").value;      
      const valueInputPasswordL = document.querySelector("#signUpPass").value;
      
      firebase.auth().createUserWithEmailAndPassword(valueInputTextL, valueInputPasswordL).then(function(user) {
        controller.changeTemp("#/home");
      })
      .catch(function(error) {
        const errorMessageSignUp = document.getElementById("errorMessageSignUp");
        let errorMessage = error.message;
        errorMessageSignUp.innerHTML = errorMessage;
  });      
    }
    export const login = () => {
      let valueInputTextSU = document.getElementById("emailLogin").value;      
      const valueInputPasswordSU = document.querySelector("#passwordLogin").value;
      firebase.auth().signInWithEmailAndPassword(valueInputTextSU, valueInputPasswordSU).then(function(user) {
        controller.changeTemp("#/home");
        console.log("entro");
        
  })
  .catch(function(error) {
    const errorMessageLogin = document.getElementById("errorMessageLogin");
        errorMessageLogin.innerHTML = "Invalid email or password";
  });
}  
    export const signUpGoogle = () => {
      const providerGoogle = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(providerGoogle);
    }
    export const signUpFacebook = () => {
      const providerFacebook = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(providerFacebook);

    }
