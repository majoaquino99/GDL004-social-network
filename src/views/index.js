import Register from "./pages/register.js";
import Home from "./pages/home.js";
import Different from "./pages/page404.js";
// import { controller } from "../controller/controller.js"

const elements = {
    register: Register,
    home: Home,
    different: Different    
}


const view = {
    init: () => {

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const userLogin = {
                id: Date.now(),
                username: loginForm.username.value,
                password: loginForm.password.value,                
            }
            loginForm.reset();
            
        })
    }
}
export { elements, view };