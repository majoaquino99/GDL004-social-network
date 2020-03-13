export default () => {
    const viewProfile = `
    <h1>PROFILE</h1>
    `
    const divProfileElement = document.createElement("div");
    divProfileElement.innerHTML = viewProfile;
    return divProfileElement;
};

/* 
import { getPosts } from '../../model/firebase-post.js';
import { renderPost } from './post.js';

export default () => {

   const homeTemplate =`<div class="contenedor">  
   <div id="homeHeader" class="homeHeader">
     <h2>SURVOLÉ</h2>
   </div>
   <div id="gridRight"class="gridRight">
     <h3>SIDEBAR-1</h3>
   </div>
   <div id="homeContent"class="homeContent">       
   </div>
   <div id="leftGrid"class="leftGrid">
     <h3>SIDEBAR-2</h3>
   </div>
</div>` ;
   
    let divHome = document.createElement("div");
    divHome.classList.add("divHome");
    divHome.innerHTML = homeTemplate;

    const divHomeContent = divHome.querySelector("#homeContent");
   /*  const textArea = document.createElement("textarea");
    textArea.classList.add("textArea");
    divHomeElement.appendChild(textArea); */  

    //traer todos los posts DESDE el model
   /*  const postsList = getPosts();

    const divList = document.createElement("div");
    divList.classList.add("post-list-container");
    divList.setAttribute("id", "list-container");

    //mandar todos los post HACIA la vista
   const postNodesList = createList(postsList);

   postNodesList.forEach(element => {
    divList.appendChild(element);
   });

   divHomeContent.appendChild(divList);
   

    return divHome;
};

/* const saveElement = (event) => {
    const post = event.target.parentElement;
    const textarea = post.getElementsByTagName('textarea')[0];
    alert(textarea.value);
    //firebase
    return textarea; 
}
 */
/* const createList = (postsList) => {
    return postsList.map(postObj => {
        return renderPost(postObj, 'edit');
    });
};
 */