// You have a variable called var num1 with the value as shown:

// var num1 = 300 - 123

// Take one user input and check that number is equal or not.

// If the new user input is equal to num1, console "Equal" else console "Not equal".




var num1 = 300 - 123
let readlineSync = require("readline-sync");
var number=readlineSync.questionInt("enter a number");

if (number==num1){
   console.log("Equal");
}
else{
   console.log( "Not equal");
}


console.log(300 - 123);

