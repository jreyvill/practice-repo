"use strict"

let outputBuffer = '0';
let total = 0;
let prevSymbol;
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
        case '×':
        case '−':
        case '+':
            mathSymbolHandler(symbolValue);
            break;
        case '=':
            equalSymbol();
            break;
        case '←':
            removeLastChar();
            break;
        case 'C':
            clearBuffer();
            break;
        default:
            break;
    }
}

function equalSymbol() {
    //check if there's no previous operator clicked
    if(prevSymbol === null) {
        //do nothing and return right away
        return;
    }
    computation(parseInt(outputBuffer));
    
    //reset previous symbol pressed
    prevSymbol = null;
    
    outputBuffer = total.toString();
    total = 0;
}

function mathSymbolHandler(mathSymbol) {
    
    if(outputBuffer === '0'){
        //if value is 0, exit function and do nothing
        return;
    }

    const intBuffer = parseInt(outputBuffer)
    if (total === 0) {
        
        //holds previous value
        total = intBuffer;
    }
    else {

        //do computation when there's a previous value
        computation(intBuffer);
    }
    
    //holds previous symbol clicked
    prevSymbol = mathSymbol; 
    
    //set display to '0'     
    clearBuffer();
}

//a function that handles all the computation for the output
function computation(prevBuffer) {
    switch (prevSymbol) {
        case '÷':
            total /= prevBuffer;
            break;
        case '×':
            total *= prevBuffer;
            break;
        case '−':
            total -= prevBuffer;
            break;
        case '+':
            total += prevBuffer;
            break;
        default:
            break;
    }
}

//refresh display with concated pressed numeric value
function rerenderDisplay() {
    outputDisplay.innerText = outputBuffer;
}

function clearBuffer() {
    outputBuffer = '0';
}

function removeLastChar() {
    //check if the output length is 1
    if(outputBuffer.length === 1) {
        //if 1, set buffer to '0'
        clearBuffer();
    } else {
        //remove last char from display/output
       outputBuffer =  outputBuffer.substring(0, outputBuffer.length - 1);
    }
}

function numberHandler(numericValue) {
    if(outputBuffer === '0') {
        //update output buffer with numeric value being pressed
        outputBuffer = numericValue;
    } else if (outputBuffer.length !== 12) {

        
        //keep adding char to the output buffer every num button clicked
        outputBuffer += numericValue;
    }
}


