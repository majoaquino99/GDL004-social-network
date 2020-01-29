import { getPosts } from '../../model/firebase-post.js';
import { renderPost } from './post.js';

export default () => {

    //traer todos los posts DESDE el model
    const postsList = getPosts();

    const divHomeElement = document.createElement("div");

    const title1 = document.createElement('h1');
    title1.innerHTML = "Bienvenida a READ & TELL";

    const title2 = document.createElement('h2');
    title2.innerHTML = "HOME";

    const divList = document.createElement("div");
    divList.classList.add("post-list-container");
    divList.setAttribute("id", "list-containe");

    //mandar todos los post HACIA la vista
   const postNodesList = createList(postsList);

   postNodesList.forEach(element => {
    divList.appendChild(element);
   });

   divHomeElement.appendChild(title1);
   divHomeElement.appendChild(title2);
   divHomeElement.appendChild(divList);

    return divHomeElement;
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
