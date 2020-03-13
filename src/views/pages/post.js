
const renderPost = (postObj, type) => {
  const readPostToRender = renderRead(postObj, toggleType);
  const editPostToRender = renderEdit(postObj, toggleType);
  editPostToRender.classList.add('hide');
  
  const postContainer = document.createElement('div');
  postContainer.className = 'post-container';
  postContainer.appendChild(readPostToRender);
  postContainer.appendChild(editPostToRender);
  return postContainer;
};

const toggleType = (e) => {
  const postElement = e.target.parentElement.parentElement;
  const readPost = postElement.querySelector('.post-read');
  const editPost = postElement.querySelector('.post-edit');
  readPost.classList.toggle('hide');
  editPost.classList.toggle('hide');
  
}


// template de post 
const renderRead = (postObj, toggleCallback) => {

    //username Element
    const usernameElement = document.createElement('div');
    usernameElement.className = 'username-div';
    usernameElement.innerHTML = postObj.username;

    //post Element
    const postElement = document.createElement('div');
    postElement.className = 'post-div';
    postElement.innerHTML = postObj.post;

    //edit button Element
    const editButton = document.createElement('button');
    editButton.className = 'homeButtons';
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', toggleCallback);

    // like conteiner
    const likeCounter = document.createElement('p'); // likeCounter = <p></p>
  likeCounter.style.display = 'inline'; // <p style="display:inline"></p>
  if (postObj.like) { // si es mayor a 0
    likeCounter.textContent = postObj.like; // <p style="display:inline"> 7 </p>
  }

  // like Icon <3 U 
  const likeIcon = document.createElement('i'); // likeIcon = <i></i>
  likeIcon.className = 'fas fa-heart'; // likeIcon = <i style="fas fa-heart"></i>
  if (postObj.like) { // si es mayor a 0
    likeIcon.className += ' like-icon-liked'; // agregar clase para pintar el coracao
  }

  likeIcon.addEventListener('click', () => { // evento click en el corazón
    likeIcon.classList.toggle('like-icon-liked'); // toggleClass. Si no tiene like hacer rojo, si ya tiene quitar lo rojo
    if (likeIcon.classList.contains('like-icon-liked')) { // verificar si el icono tiene o no la clase
      // en caso de que si
      likeCounter.textContent = ++postObj.like; // incrementar valor del contador de likes
    } else {
      // validar para no mostrar 0
      if (postObj.like === 1) {
        --postObj.like; // resto el valor
        likeCounter.textContent = '' // pero solo muestro un string vacio
        return
      }
      
      likeCounter.textContent = --postObj.like; // restar valor de contador de likes
    }
    /* Este evento debe llamar a firebase para persistir valor de publicación en base de datos. 
    AND ALSO: PLEASE DONT FORGET TO DELETE YOUR COOKIES BCOZ COOKIES ARE BAD. */
  });


    //agregar los elementos
    const readElement = document.createElement('div');
    readElement.className = 'post-read';
    readElement.appendChild(usernameElement);
    readElement.appendChild(postElement);
    readElement.appendChild(editButton);
    readElement.appendChild(likeIcon);
    readElement.appendChild(likeCounter);

    return readElement;
}

// template de editar
const renderEdit = (postObj, toggleCallback) => {

    //username Element
    const usernameElement = document.createElement('div');
    usernameElement.className = 'username-div';
    usernameElement.innerHTML = postObj.username;

    //post Element
    const postElement = document.createElement('textarea');
    postElement.className = 'area-div';
    postElement.innerHTML = postObj.post;

    //edit button Element
    const saveButton = document.createElement('button');
    saveButton.className = "homeButtons";
    saveButton.innerHTML = 'Update';

    saveButton.addEventListener('click', (e) => {
        saveElement(e);
        toggleCallback(e);

    });
    // like conteiner
    const likeCounter = document.createElement('p'); // likeCounter = <p></p>
  likeCounter.style.display = 'inline'; // <p style="display:inline"></p>
  if (postObj.like) { // si es mayor a 0
    likeCounter.textContent = postObj.like; // <p style="display:inline"> 7 </p>
  }

  // like Icon <3 U 
  const likeIcon = document.createElement('i'); // likeIcon = <i></i>
  likeIcon.className = 'fas fa-heart'; // likeIcon = <i style="fas fa-heart"></i>
  if (postObj.like) { // si es mayor a 0
    likeIcon.className += ' like-icon-liked'; // agregar clase para pintar el coracao
  }

  likeIcon.addEventListener('click', () => { // evento click en el corazón
    likeIcon.classList.toggle('like-icon-liked'); // toggleClass. Si no tiene like hacer rojo, si ya tiene quitar lo rojo
    if (likeIcon.classList.contains('like-icon-liked')) { // verificar si el icono tiene o no la clase
      // en caso de que si
      likeCounter.textContent = ++postObj.like; // incrementar valor del contador de likes
    } else {
      // validar para no mostrar 0
      if (postObj.like === 1) {
        --postObj.like; // resto el valor
        likeCounter.textContent = '' // pero solo muestro un string vacio
        return
      }
      
      likeCounter.textContent = --postObj.like; // restar valor de contador de likes
    }
    /* Este evento debe llamar a firebase para persistir valor de publicación en base de datos. 
    AND ALSO: PLEASE DONT FORGET TO DELETE YOUR COOKIES BCOZ COOKIES ARE BAD. */
  });

    // like icon
  /*const likeIcon = document.createElement('i');
  likeIcon.className = 'fas fa-heart';
  if (postObj.like) {
    likeIcon.className += ' like-icon-liked';
  }

  likeIcon.addEventListener('click', () => {
    likeIcon.classList.toggle('like-icon-liked');
  });
*/

    //agregar los elementos
    const editElement = document.createElement('div');
    editElement.className = 'post-edit';
    editElement.appendChild(usernameElement);
    editElement.appendChild(postElement);
    editElement.appendChild(saveButton);
    


    return editElement;
};


const saveElement = (event) => {

  const post = event.target.parentElement;
  const textarea = post.getElementsByTagName('textarea')[0];
  alert(textarea.value);
  //firebase
  return saveElement; 
}

export { renderPost };