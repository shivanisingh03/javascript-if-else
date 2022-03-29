let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);





// program using switch statement

let  b= 1;

switch (b) {
    case "1":
        b = 1;
        break;
    case 1:
        b = 'one';
        break;
    case 2:
        b = 'two';
        break;

    default:
        b = 'not found';
        break;
}
console.log(`The value is ${b}`);







// multiple case switch program

let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}



// program for a simple calculator
let result;

// take the operator input
let readlinesync=require("readline-sync")
var operator = readlinesync.question('Enter operator ( either +, -, * or / ): ');

// take the operand input
var number1 = readlinesync.questionInt('Enter first number: ');
var number2 = readlinesync.questionInt('Enter second number: ');

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}









