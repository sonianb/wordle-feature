const words = [
    'apple',
    'chair',
    'dream',
    'drive',
    'floor',
    'pilot',
    'reply',
    'staff',
    'thing',
    'woman',
  ];
  
  
  //function that will generate a random word from the words array
  function generateWord(words) {
    return Math.floor(Math.random() * words.length);
  }
  
  console.log(generateWord(words));
