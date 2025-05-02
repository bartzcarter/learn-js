//let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber = 10;
let guessCount = 0;
let resetButton;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

const guessSubmit = document.querySelector(".guessSubmit");
const userGuess = document.querySelector(".userGuess");

guessSubmit.addEventListener("click", checkGuess);

function checkGuess(){
    guessCount += 1;

    if(guessCount <= 10){
        const guess = Number(userGuess.value);
        guesses.textContent = `Number of guesses used ${guessCount}`;

        // If guess is correct
        if(guess === randomNumber){
            lastResult.textContent = "Correct!";
            lowOrHigh.textContent = "";
            setGameOver();
        }
        else if(guessCount === 10){
            setGameOver();
        }
        else if(guess < randomNumber){
            lastResult.textContent = "Incorrect!";
            lowOrHigh.textContent = "Too Low!";
        }
        else if(guess > randomNumber){
            lastResult.textContent = "Incorrect!";
            lowOrHigh.textContent = "Too High!";
        }
    }
    else{
        setGameOver();
    }
}

function setGameOver(){
    if(guessCount === 10){
        lastResult.textContent = "Incorrect, you ran out of guesses. Reset the game.";
    }
    guessSubmit.disabled = true;
    userGuess.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Reset"
    document.getElementById("results").appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
    guessCount = 0;
}

function resetGame(){
    resetButton.parentNode.removeChild((resetButton));
    guessSubmit.disabled = false;
    userGuess.disabled = false;
    userGuess.value = "";
    let results = document.querySelectorAll("#results p");
    for(const result of results){
        result.textContent = "";
    }
}