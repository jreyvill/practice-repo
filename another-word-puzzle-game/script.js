"use strict"
const MAX_ANSWER_LENGTH = 5;
const allLetters = document.querySelectorAll('.letter') // getting all the letters
console.log(allLetters)
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

    let currentGuess = '';
    function addLetter(letter) {

        if (currentGuess.length < MAX_ANSWER_LENGTH) {
            currentGuess += letter;
        } else {
            currentGuess  = currentGuess.substring(0, currentGuess.length - 1) + letter; // replace the last etter
        }
        
        allLetters[currentGuess.length - 1].innerText = letter;
    }

  
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

init();