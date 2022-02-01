// *************************
// * Game global variables *
// *************************

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

//store the answer in a variable
const answer = generateWord(words)
console.log(answer);

//store each letter of the word the user is testing
let userWord = [];

// **************
// * Game logic *
// **************

//function that will generate a random word from the words array
function generateWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

//function that will determine if it the letter is correct and at the right position, misplaced or not correct
function checkLetter(word, letter, index) {
  if (word.charAt(index) === letter) {
    return 'Well done! The index is at the correct position.'
  }
  if (word.includes(letter)) {
    return 'The word contains this letter';
  }
  return 'Wrong letter and position';
}

// ********************
// * Dom manipulation *
// ********************

//Select the boxes 
const boxOne = document.getElementById('box1');
const boxTwo = document.getElementById('box2');
const boxThree = document.getElementById('box3');
const boxFour = document.getElementById('box4');
const boxFive = document.getElementById('box5');
const allBoxes = document.getElementsByClassName('box');

document.addEventListener('keydown', (event) => {
  let letter = event.key;
  console.log(letter);
  //add each newly selected letter in the userWord array
  userWord.push(letter);

  Array.from(allBoxes).forEach((box, index) => {
    if (userWord[index] !== undefined) {
      box.innerText = userWord[index];
    } else {
      box.innerText ="";
  // Display each letter of the userWord in each box
      // boxOne.innerText = userWord[0];
      // boxTwo.innerText = userWord[1];
      // boxThree.innerText = userWord[2];
      // boxFour.innerText = userWord[3];
      // boxFive.innerText = userWord[4];
    }

  });

  // Check if the pressed letter is correct and console log the result
});


