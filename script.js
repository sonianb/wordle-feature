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
function checkLetter(answer, letter, index) {
  if (answer.charAt(index) === letter) {
    return "correct"
  }
  if (answer.includes(letter)) {
    return "misplaced";
  }
  return "wrong";
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
  //restrict the input to letters only 
  if (event.code.includes("Key")) {
  //add each new letter in the userWord array
    userWord.push(letter);
  }

  //use backspace to delete items from userWord 
  if (letter === 'Backspace') {
    userWord.pop();
  }


  //change the background color when the user has selected 5 letters and hits enter
  if (letter === 'Enter' && userWord.length === 5) {
    Array.from(allBoxes).forEach((box, index) => {
      if (checkLetter(answer, userWord[index], index) === 'correct') {
        box.style.backgroundColor = '#6aaa64';
      } else if (checkLetter(answer, userWord[index], index) === 'wrong') {
        box.style.backgroundColor = '#939598';
      } else if (checkLetter(answer, userWord[index], index) === 'misplaced') {
        box.style.backgroundColor = '#c9b458';
      }
    });
  }

  //display each letter in different boxes unless it's undefined
  Array.from(allBoxes).forEach((box, index) => {
    if (userWord[index] !== undefined) {
      box.innerText = userWord[index];
    } else {
      box.innerText = "";
    }
  });
});


