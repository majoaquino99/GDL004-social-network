const posts = [
    {
      id: 1,
      username: 'Mirey',
      post: 'Me estoy tomando un latte',
      like: true
    },
    {
      id: 2,
      username: 'Mirey',
      post: 'Estoy aprendiendo programacion',
      like: true
    },
    {
      id: 3,
      username: 'Ricardo',
      post: 'arriba el necaxa prros',
      like: false
    },
  ];
  
  const getPosts = () => {
    //esto debería ser FIRESTORE
    return posts;
  };
  
  export {getPosts};