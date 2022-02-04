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

// **************
// * UI updates *
// **************

//display each letter in a different box unless it's undefined
function displayLetter() {
  Array.from(allBoxes).forEach((box, index) => {
    if (userWord[index] !== undefined) {
      box.innerText = userWord[index];
      box.style.borderColor = "#939598"; //change border color on input 
    } else {
      box.innerText = "";
    }
  });
}

//function to change the background color
function displayBackground() {
  Array.from(allBoxes).forEach((box, index) => {
    if (checkLetter(answer, userWord[index], index) === 'correct') {
      box.classList.add('correct');
    } else if (checkLetter(answer, userWord[index], index) === 'wrong') {
      box.classList.add('wrong');
    } else if (checkLetter(answer, userWord[index], index) === 'misplaced') {
      box.classList.add('misplaced');
    }
  });
}

function clearBackground() {
  Array.from(allBoxes).forEach((box) => {
    box.classList.add('reset-background');
  });
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
const answerFeedback = document.getElementById('answer-feedback')

document.addEventListener('keydown', (event) => {
  let letter = event.key;
  console.log(event);
  if (event.code.includes("Key") && userWord.length <= 4) {   //restrict the input to 5 letters only 
    userWord.push(letter);   //add each new letter in the userWord array
  }

  if (letter === 'Backspace') { //use backspace to delete items from userWord 
    userWord.pop();
    clearBackground();
  }
  if (letter === 'Enter' && userWord.length === 5) {
    displayBackground()
    const wordStr = userWord.join('');
    if (wordStr === answer) {
      answerFeedback.innerText = "You guessed the word. Well done! 🤩"
    } else {
      answerFeedback.innerText = "Not quite there yet. Press spacebar to try again. 🙃"
    }
  }

  if (event.code === "Space") { //press Space to play again
    userWord = [];
    clearBackground();
    answerFeedback.innerText = "";
  }

  displayLetter()

});


