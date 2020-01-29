const posts = [
    {
      id: 1,
      username: 'Mirey',
      post: 'Me estoy tomando un latte',
      like: 1
    },
    {
      id: 2,
      username: 'Mirey',
      post: 'Estoy aprendiendo programacion',
      like: 2
    },
    {
      id: 3,
      username: 'Ricardo',
      post: 'arriba el necaxa prros',
      like: 3
    },
  ];
  
  const getPosts = () => {
    //esto debería ser FIRESTORE
    return posts;
  };
  
  export {getPosts};