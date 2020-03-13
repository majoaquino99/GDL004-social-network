const posts = [
    {
      id: 1,
      username: 'Mirey',
      post: 'I absolutely love this book! I love the sarcasm in the writing and the way that the protagonist just kind of floats around between the different "worlds" not really belonging anywhere .... just observing life from different perspectives and striving to fit, but just never quite getting there.'+
      'In the end everybody tries so hard.. but never really gets what they were looking for.'+
      'Im a sucker for a tragic ending (as long as its meaningful and not just because its unpredictable) and this book definitely has that.'+
      "So we beat on, boats against the current, borne back ceaselessly into the past.",
      like: 1
    },
    {
      id: 2,
      username: 'Lore rated it -"really liked it"',
      post: 'As a woman and a nun in Mexico in the mid to later 1600s, Juanas writings(poetry and prose) were extraordinary and remarkable for setting forth a strong feminine and secular viewpoint. The "Reply to Sor Philotea" would especially stand up (even today) as a declaration that many people would be proud to stand behind.',
      like: 2
    },
    {
      id: 3,
      username: 'Majo',
      post: 'Doubt thou the stars are fire;' +
      'Doubt that the sun doth move;' +
      'Doubt truth to be a liar;' +
      'But never doubt I love.' + 
      '― William Shakespeare, Hamlet,',
      like: 3
    },
    {
      id:4,
      username: 'Majo',
      post: '"It isnt Narnia, you know," sobbed Lucy. "Its you. We shant meet you there. And how can we live, never meeting you?"'+
      "But you shall meet me, dear one,"+ 'said Aslan.' +
      "Are -are you there too, Sir?" + 'said Edmund.' +
      "I am," + 'said Aslan. "But there I have another name. You must learn to know me by that name. This was the very reason why you were brought to Narnia, that by knowing me here for a little, you may know me better there."'+
      '— C.S. Lewis (The Voyage of the Dawn Treader (Chronicles of Narnia, #5))',
      like: 4
    }
  ];
  
  const getPosts = () => {
    //esto debería ser FIRESTORE
    return posts;
  };
  
  export {getPosts};