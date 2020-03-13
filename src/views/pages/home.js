import { getPosts } from '../../model/firebase-post.js';
import { renderPost } from './post.js';

export default () => {

   const homeTemplate =`<div class="contenedor">  
   <div id="homeHeader" class="homeHeader">
   <img id="logoImageHome" src="/src/images/logo-blancoo.png"></img>
   </div>
   <div id="gridRight"class="gridRight">
        <div><img src="/src/images/1.jpg" width="90%"/><img src="/src/images/2.jpg" width="90%"/><img src="/src/images/3.jpg" width="90%"></div>
        <div><img src="/src/images/4.jpg" width="90%"/><img src="/src/images/5.jpg" width="90%"/><img src="/src/images/6.jpg" width="90%"></div>
        <div><img src="/src/images/8.jpg" width="90%"/><img src="/src/images/9.jpeg" width="90%"/><img src="/src/images/10.jpg" width="90%"></div>
   </div>
   <div id="homeContent"class="homeContent">      
   </div>
   <div id="leftGrid"class="leftGrid">
        <div><img src="/src/images/8.jpg" width="90%"/><img src="/src/images/9.jpeg" width="90%"/><img src="/src/images/10.jpg" width="90%"></div>
        <div><img src="/src/images/11.png" width="90%"/><img src="/src/images/12.jpg" width="90%"/><img src="/src/images/13.jpg" width="90%"></div>   
        <div><img src="/src/images/1.jpg" width="90%"/><img src="/src/images/2.jpg" width="90%"/><img src="/src/images/3.jpg" width="90%"></div>
   </div>
</div>` ;
   
    let divHome = document.createElement("div");
    divHome.classList.add("divHome");
    divHome.innerHTML = homeTemplate;

    const divHomeContent = divHome.querySelector("#homeContent");

    let divTextArea = document.createElement("div");
    divTextArea.className = "divTextArea";
    divHomeContent.appendChild(divTextArea);

    const textArea = document.createElement("textarea");
    textArea.classList.add("textArea");
    divTextArea.appendChild(textArea); 

    const submitPost = document.createElement("button");
    submitPost.classList.add("homeButtons");
    submitPost.innerText = "Add Post";
    divTextArea.appendChild(submitPost);


    //traer todos los posts DESDE el model
    const postsList = getPosts();
    const divList = document.createElement("div");
    divList.setAttribute("id", "list-container");
    //mandar todos los post HACIA la vista
   const postNodesList = createList(postsList);

   postNodesList.forEach(element => {
    divList.appendChild(element);
   });
   divList.appendChild(divTextArea).before;
   divHomeContent.appendChild(divList);

    return divHome;
};

const saveElement = (event) => {

    const post = event.target.parentElement;
    const textarea = post.getElementsByTagName('textarea')[0];
    alert(textarea.value);
    //firebase
    return textarea; 
}

const createList = (postsList) => {
    return postsList.map(postObj => {
        return renderPost(postObj, 'edit');
    });
};
