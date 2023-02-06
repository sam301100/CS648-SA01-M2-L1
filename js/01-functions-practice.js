var number;

function halfNumber() {
    "use strict";
    window.document.write("Half of " + number + " is " + number / 2 + ".<br>");
}

number = parseFloat(window.prompt("Half of a number: \nEnter a number:"));
halfNumber();


var number;
function squareNumber() {
    "use strict";
    window.document.write("The result of squaring a number " + number + " is " + number * number + ".<br>");
}

number = parseFloat(window.prompt("Squaring a number: \nEnter a number:"));
squareNumber();


var firstNumber, secondNumber;

function percentOf() {
    "use strict";
    window.document.write(firstNumber + " is " + firstNumber / secondNumber * 100 + "% of " + secondNumber + ".<br>");
}

firstNumber = parseFloat(window.prompt("Percent the first number represents of the second number: \nEnter a first number:"));
secondNumber = parseFloat(window.prompt("Percent the first number represents of the second number: \n Enter a second number:"));
percentOf();


var firstModNumber;
var secondModNumber;

function findModulus() {
    "use strict";
    var mod = firstModNumber % secondModNumber;
    window.document.write(mod + " is the modulus of " + firstModNumber + " and " + secondModNumber + ".<br>");
}

firstModNumber = parseFloat(window.prompt("The modulus of the two numbers: \nEnter a first number:"));
secondModNumber = parseFloat(window.prompt("The modulus of the two numbers: Enter a second number:"));
findModulus();

