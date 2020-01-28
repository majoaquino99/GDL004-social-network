
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
    editButton.className = 'edit-button';
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', toggleCallback);

    //agregar los elementos
    const readElement = document.createElement('div');
    readElement.className = 'post-read';
    readElement.appendChild(usernameElement);
    readElement.appendChild(postElement);
    readElement.appendChild(editButton);

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
    saveButton.innerHTML = 'Update';

    saveButton.addEventListener('click', (e) => {
        saveElement(e);
        toggleCallback(e);
    });

    // like icon
  const likeIcon = document.createElement('i');
  likeIcon.className = 'fas fa-heart';
  if (postObj.like) {
    likeIcon.className += ' like-icon-liked';
  }

  likeIcon.addEventListener('click', () => {
    likeIcon.classList.toggle('like-icon-liked');
  });


    //agregar los elementos
    const editElement = document.createElement('div');
    editElement.className = 'post-edit';
    editElement.appendChild(usernameElement);
    editElement.appendChild(postElement);
    editElement.appendChild(saveButton);


    return editElement;
}

const saveElement = (event) => {

  const post = event.target.parentElement;
  const textarea = post.getElementsByTagName('textarea')[0];
  alert(textarea.value);
  //firebase
  return saveElement; 
}

export { renderPost };