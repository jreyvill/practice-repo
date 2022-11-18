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

function mathSymbolHandler(mathSymbol) {
    if(outputBuffer === '0'){
        return;
    }
    const intBuffer = parseInt(outputBuffer)
    if (total === 0) {
        total = intBuffer;
    }
    else {
        computation(intBuffer);
    }

    prevSymbol = mathSymbol;      
    clearBuffer();
}

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

function rerenderDisplay() {
    outputDisplay.innerText = outputBuffer;
}

function clearBuffer() {
    outputBuffer = '0';
}

function removeLastChar() {
    if(outputBuffer.length === 1) {
        clearBuffer();
    } else {
       outputBuffer =  outputBuffer.substring(0, outputBuffer.length - 1);
    }
}

function numberHandler(numericValue) {
    if(outputBuffer === '0') {
        outputBuffer = numericValue;
    } else {
        outputBuffer += numericValue;
    }
}


