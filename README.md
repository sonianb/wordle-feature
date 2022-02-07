# Wordle Feature
This is a take-home challenge based on the viral word game, [Wordle](https://www.powerlanguage.co.uk/wordle/). The goal is to re-create one of the game's features. 

## User Stories
- [x] I want to see if the letter I picked is in the correct position, misplaced, or wrong.
- [x] I want the UI to update based on my answer.

I chose to work on these user stories because these features are an important part of Wordle's logic and thought that it'd be an interesting task to try to re-create them.

## Feature details
- A random word is generated from an array of 10, 5-letter words.
- To test whether the answer is correct or not, the user must pick 5 letters and hit 'Enter.'
- When the user hits enter, the word is compared against the solution and the box background colour changes to:
   * grey if the letter is not in the solution
   * yellow if the letter is part of the solution, but not at the right place
   * green if the letter is part of the solution and at the correct place
- User can use 'Backspace' to delete the previous letter before testing the word.
- After testing the word, user can use 'Spacebar' to test another word.
- Whether the user has guessed correctly or not, the UI will be updated with a message.


## Possible improvements
- Add an on-screen keyboard to make the game mobile-friendly. 
- Check if the word tested is an actual English word.
- Display the correct letters tested by the user.  

---

✨ You can view the application [here](https://sonianb.github.io/wordle-feature/) ✨
