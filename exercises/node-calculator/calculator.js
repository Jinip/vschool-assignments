var readline = require("readline-sync");
var add = require("./add");
var subtract = require("./subtract");
var multiply = require("./multiply");
var divide = require("./divide");
var carot = require("./carot");

var operators = [
    "plus",
    "minus",
    "times",
    "divide by",
    "carot"
]

var num1 = parseInt(readline.question("First number: "));

var operator = readline.keyInSelect(operators, "Which operator?");

var num2 = parseInt(readline.question("Second number: "));

var result;
switch (operator){
    case 0: 
        result = add(num1, num2);
        break;
    case 1: 
        result = subtract.subtract(num1, num2);
        break;
    case 2: 
        result = multiply.multiply(num1, num2);
        break;
    case 3: 
        result = divide(num1, num2);
        break;
    case 4: 
        result = carot(num1, num2);
        break;
}

console.log("Equals: " + result);