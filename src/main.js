import { controller } from "./controller/controller.js";


const init = () => {
    controller.changeTemp(window.location.hash);
    window.addEventListener("hashchange", () => 
        controller.changeTemp(window.location.hash)

    );
}

window.addEventListener("load", init);
