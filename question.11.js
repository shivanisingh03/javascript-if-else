// Take two numbers as input from the user in variables varx and vary.
// Check whether varx is divisible by vary.
// If yes, console Divisible else console Not Divisible.


let readlineSync = require("readline-sync");
var varx=readlineSync.questionInt("enter a number: ");
var vary=readlineSync.questionInt("enter a number: ");
if (varx%vary===0){
   console.log("Divisible")
}
else{
   console.log("Not Divisible")
}