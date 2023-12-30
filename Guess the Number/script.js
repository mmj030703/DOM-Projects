let randomNumber = Math.floor(Math.random() * 100) + 1;
const previousGuesses = [];
let guessesLeft = 10;
let winStatus = false; 

const gameForm = document.querySelector('.form');
const result = document.querySelector('.lowOrHi');
const guessesRemaining = document.querySelector('.lastResult');
const previousGuessesContainer = document.querySelector('.resultParas p .guesses');
const restartGameBtn = document.querySelector('.restart-game-btn');

const showRestartBtn = () => {
    result.textContent - "Game Over.";
    restartGameBtn.style.display = "block";
};

const checkInputStringIsValid = (inputValueInString) => {
    if(!(/^[\d-][\d]*$/.test(inputValueInString))) {
        result.textContent = "Invalid Input Value! Input Value should be in between 1 to 100!";
        return false;
    }
    return true;
};

const checkInputIsNotInRange = (inputValue) => {
    if(inputValue < 1 || inputValue > 100) {
        result.textContent = "Input Value should be in between 1 to 100!";
        return true;
    }
    return false;
};

const checkInputIsValid = (inputValue) => {
    if(isNaN(inputValue)) {
        result.textContent = "Invalid Input Value! Input Value should be in between 1 to 100!";
        return false;
    }
    return true;
};

const displayResultMesaage = (inputValue) => {
    if (randomNumber === inputValue) {
        result.textContent = "You Guessed the Correct Number.";
        showRestartBtn();
        winStatus = true;
    }
    else if (randomNumber < inputValue) {
        result.textContent = "Your Guess is High. Think of Lower Number.";
    }
    else {
        result.textContent = "Your Guess is Low. Think of Higher Number.";
    }

    if (guessesLeft === 0 && randomNumber !== inputValue) {
        showRestartBtn();
        result.textContent += ` Game Over! Random Number is ${randomNumber}.`;
    }
};

const checkInput = (e) => {
    e.preventDefault();

    if (guessesLeft > 0 && !winStatus) {
        const inputValueInString = gameForm.querySelector('.guessField').value;
        
        const isStringValid = checkInputStringIsValid(inputValueInString);
        if(!isStringValid) return;

        const inputValue = parseInt(inputValueInString);

        const isInputNotInRange = checkInputIsNotInRange(inputValue);
        if(isInputNotInRange) return;

        const isInputValid = checkInputIsValid(inputValue);
        if(!isInputValid) return;

        guessesLeft--;

        previousGuesses.push(inputValue);
        previousGuessesContainer.textContent += `${inputValue}, `;
        guessesRemaining.textContent = guessesLeft;

        displayResultMesaage(inputValue);
    }
    else {
        result.textContent = `Game Over! Click Restart to Play Again.`;
    }
};

const resetGame = (e) => {
    guessesLeft = 10;
    previousGuesses.length = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessesRemaining.textContent = "10";
    previousGuessesContainer.textContent = ""; 
    winStatus = false;

    let input = document.querySelector('.guessField');
    input.value = "";

    restartGameBtn.style.display = "none";
    result.textContent = "";
};

gameForm.addEventListener('submit', checkInput);
restartGameBtn.addEventListener('click', resetGame);