//import { model } from "../model/index.js"
import { elements, view } from "../views/index.js"


export const controller = {

    init: () => {
        view.init()
    },
    


changeTemp: (hash) => {
    const mainSection = document.getElementById("container");
    mainSection.innerHTML = "";

    switch (hash) {
        case "":
        case "#":
        case "#/register":
            return mainSection.appendChild(elements.register());

        case "#/home":
            mainSection.appendChild(elements.home())
            controller.init()
        case "#/profile":
            mainSection.appendChild(elements.profile())
            controller.init()
        default:
            return mainSection.appendChild(elements.different())
    }
  }
}

 export const login = () => {
        console.log("hola");

    
} 
