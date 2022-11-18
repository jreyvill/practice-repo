"use strict"

let outputBuffer = '0';
const outputDisplay = document.querySelector('.output');
const userPress = document.querySelector('.buttons-container')
    .addEventListener('click', (ev) => {
    buttonClicked(ev.target.innerText);
});

function buttonClicked(value) {
    if(isNaN(parseInt(value))) {
        symbolHandler(value);
    } else {
        numberHandler(value);
    }
    rerenderDisplay();
}

function symbolHandler(symbolValue) {
  
    switch (symbolValue) {
        case '÷':
            break;
        case '×':
            break;
        case '−':
            break;
        case '+':
            break;
        case '=':
            break;
        case '←':
            break;
        case 'C':
            break;
        default:
            break;
    }
}

function rerenderDisplay() {
    outputDisplay.innerText = outputBuffer;
}

function numberHandler(numericValue) {
    if(outputBuffer === '0') {
        outputBuffer = numericValue;
    } else {
        outputBuffer += numericValue;
    }
}


