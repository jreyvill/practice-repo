"use strict"
const MAX_ANSWER_LENGTH = 5;
const allLetters = document.querySelectorAll('.letter') // getting all the letters
const loadingDiv = document.querySelector('info-bar') //loading indicator


async function init() {
    
    //added function name for debugging purposes and tracking of error instead of anonymous function
    document.addEventListener('keydown', function handleKeyPress(event) {
       
        //records user keypress
        const userAction = event.key;
        console.log(userAction)
        if (userAction === 'Enter') {
            commitGuess();
        } else if (userAction === 'Backspace') {
            backspace();   
        } else if (isLetter(userAction)) {
            addLetter(userAction.toUpperCase())
        } else {
            //ignore all except the above keypresses 
            //do nothing
        } 
    });

    /***
     * Function responsible for placing letter in the square box
     */
    let currentGuess = '';
    let currentRow = 0;
    function addLetter(letter) {

        if (currentGuess.length < MAX_ANSWER_LENGTH) {
            
            currentGuess += letter;
        } else {
            currentGuess  = currentGuess.substring(0, currentGuess.length - 1) + letter; // replace the last etter
        }
        
        // determine which row to place letter
        allLetters[MAX_ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter;
    }

    /***
     * Function responsible for handling if validaiton of the word, win or lose, correct/close/wrong word
     */
    async function commitGuess() {
        // check if maximum letter length of guess is 5 letters
        if (currentGuess.length !== MAX_ANSWER_LENGTH) {
            //do nothing, exit funtion
            return;
        }

        // TODO validate the word

        // TODO do all the marking as "correct" "close" or "wrong"

        // TODO did they win or lose?
        
        currentRow++;
        currentGuess = '';
    }
  
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

init();