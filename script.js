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

//variable that will be used to not allow user use 'Baskspace' after hitting enter  
let finished = false;

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
      box.classList.add('box-letter'); //change border color on input 
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

function resetStyle() {
  Array.from(allBoxes).forEach((box) => {
    box.classList.remove('correct');
    box.classList.remove('wrong');
    box.classList.remove('misplaced');
    box.classList.remove('box-letter');
  });
}


// ********************
// * Dom manipulation *
// ********************

//Select the boxes 
const allBoxes = document.getElementsByClassName('box');
const answerFeedback = document.getElementById('answer-feedback')

document.addEventListener('keydown', (event) => {
  let letter = event.key;
  if (event.code.includes("Key") && userWord.length <= 4) {   //restrict the input to 5 letters only 
    userWord.push(letter);   //add each new letter in the userWord array
  }

  if (letter === 'Backspace' && !finished) { //use backspace to delete items from userWord 
    userWord.pop();
    resetStyle();
  }
  if (letter === 'Enter' && userWord.length === 5) {
    displayBackground()
    const wordStr = userWord.join('');
    if (wordStr === answer) {
      answerFeedback.innerText = "You guessed the word. Well done! 🤩"
    } else {
      answerFeedback.innerText = "Not quite there yet. Press spacebar to try again. 🙃"
    }
    finished = true;
  }

  if (event.code === "Space" && finished) { //press Space to play again
    userWord = [];
    resetStyle();
    answerFeedback.innerText = "";
    finished = false;
  }

  displayLetter()

});


