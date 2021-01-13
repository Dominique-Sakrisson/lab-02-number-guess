// import functions and grab DOM elements

import { compareNumbers, setGuessesLeftDisplay, calcRemainingGuesses } from "./utils.js";

// initialize state
//get the input element for user's guess
const userGuess = (document.getElementById('user-guess'));
//get the submit buttong
const submitButton = document.getElementById('submit-guess');
//div that will tell user if their guess was higher or lower than game number

//div to display to user whether they have won or lost the game
const winLoseDisplay = document.getElementById('win-lose-display');
//button that will allow user to retry the game with a new number
const retryButton = document.getElementById('retry-button');
//display for the player's guessing being higher or lower than game number
const highLowDisplay = document.getElementById('high-low-display');

const rightMessage = 'You won the game!';
const wrongMessage = 'You got it wrong';

// set event listeners to update state and DOM

//creates a random number for the game. 

let timesGuessed = 0;

let gameNumber = Math.ceil(Math.random() * 20).toFixed(0);

console.log(gameNumber);

submitButton.addEventListener('click', () => {
   
    let guessesRemaining = 4;
    let guess = Number(userGuess.value);
    

    const rightString = `Your guess of ${guess} was the right guess!`;
    const highString = `your guess of ${guess} was higher than my number`;
    const lowString = `your guess of ${guess} was lower than my number`;
    
    timesGuessed++;
    guessesRemaining -= timesGuessed;

    //compare if numbers are the same 
    if (compareNumbers(guess, gameNumber) === 0){
        //tell the user they won, change the content of winlosedisplay
        setGuessesLeftDisplay(guessesRemaining);
        highLowDisplay.textContent = rightString;
        winLoseDisplay.textContent = rightMessage;

    } else if (compareNumbers(guess, gameNumber) === 1){
        //user guessed wrong, guesses remaining--, change content of winlosedisplay, to lose
        setGuessesLeftDisplay(guessesRemaining);
        highLowDisplay.textContent = highString;
        winLoseDisplay.textContent = wrongMessage;

    } else if (compareNumbers(guess, gameNumber) === -1) {
        //user guessed wrong, guesses remaining --, change content of winlosedisplay to lose..
        setGuessesLeftDisplay(guessesRemaining);
        highLowDisplay.textContent = lowString;
        winLoseDisplay.textContent = wrongMessage;
    }
    if (guessesRemaining === 0 && compareNumbers(guess, gameNumber) !== 0){
        winLoseDisplay.textContent = 'Out of guesses you lose the game.';
        //when user has made 4 guesses set the input disabled
        userGuess.disabled = true;
        submitButton.disabled = true;
        userGuess.value = "";
        setGuessesLeftDisplay(guessesRemaining - 1);
        return;
    } 
    
});

retryButton.addEventListener('click', () =>{
    userGuess.disabled = false;
    submitButton.disabled = false;
    //reset variables
    timesGuessed = 0;

    let gameNumber = Math.ceil(Math.random() * 20).toFixed(0);
    winLoseDisplay.textContent = "";
    highLowDisplay.textContent = "";
    setGuessesLeftDisplay();
  

    
});
 