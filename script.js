const boxOne = document.getElementById('box1');

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
    return words[Math.floor(Math.random() * words.length)];
  }
  
  //store the word in a vairable
  let word = generateWord(words)
  console.log(word);

  //function that will determine if it the letter is correct and at the right position, misplaced or not correct
function checkLetter(word, letter, index) {
  if(word.charAt(index) === letter) {
    return 'Well done! The index is at the correct position.'
  }
  if(word.includes(letter)) {
    return 'The word contains this letter';
  } 
  return 'Wrong letter and position';
} 

document.addEventListener('keypress', (event) => {
  let letter = event.key;
  console.log(letter);
  boxOne.innerText = letter;

});



// input.addEventListener('input', (event)=> {
//   let letter = event.data;
//   let result =  checkLetter(word, letter, index);
//   console.log(result);
// }
// );