const remaingGuessDiv = document.getElementById('guesses-remaining');

const outOfGuess = 'Ooo you have run out of guesses and lost the game.';
const oneGuessLeft = 'You have 1 guess remaining';
const twoGuessLeft = 'You have 2 guesses remaining';
const threeGuessesleft = 'you have 3 guesses remaining';
const fourGuessesLeft = 'you have 4 guesses remaining';

export function compareNumbers(guess, correctNumber){
   
    if (Number(guess) === Number(correctNumber)){
        return 0;
    } else if (guess < correctNumber){
        return -1;
    } else if (guess > correctNumber) {
        return 1;
    }
}

export function displayRemainingGuesses(soap){
    remaingGuessDiv.textContent = `You have ${soap} guesses left`;
}

export function calcRemainingGuesses(guessLeft, guessMade){
    let returnValue = guessLeft - guessMade;
    return returnValue;
}


export function setGuessesLeftDisplay(guessesRemaining){
    //if guesses left is less than 0 auto loss the game
    if (guessesRemaining < 0){
        remaingGuessDiv.textContent = outOfGuess;
    }
    //if 0 guesses remain and compareNumbers != 0 you lose, else you win
    else if (guessesRemaining === 1){
        remaingGuessDiv.textContent = oneGuessLeft;
    }
    else if (guessesRemaining === 2){
        remaingGuessDiv.textContent = twoGuessLeft;
    } else if (guessesRemaining === 3){
        remaingGuessDiv.textContent = threeGuessesleft;
    } else {
        remaingGuessDiv.textContent = fourGuessesLeft;
    }
    
}
