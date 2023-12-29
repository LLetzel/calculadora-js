let display = document.getElementById('display');
let clear = false;
let operation = '';
let currentNumber = '0';

function clearDisplay() {
 display.value = '';
 clear = true;
 operation = '';
 currentNumber = '0';
}

function appendNumber(number) {
 if (clear) {
    display.value = number;
    clear = false;
 } else {
    display.value += number;
 }
 currentNumber = display.value;
}

function appendOperator(op) {
 if (operation !== '') {
    equalSign();
 }
 operation = op;
 display.value += ' ' + operation + ' ';
 currentNumber = '0';
}

function calculateResult() {
 if (operation !== '') {
    equalSign();
 }
}

function equalSign() {
 let result = 0;
 let num1 = parseFloat(currentNumber);
 let num2 = parseFloat(display.value.split(' ')[2]);
 switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
 }
 currentNumber = result.toString();
 display.value = currentNumber;
 operation = '';
}