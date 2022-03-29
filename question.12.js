// Take two numbers as input from the user. Console the number which is greater.

let readlineSync=require("readline-sync")
var a=readlineSync.questionInt("enter a number: ")
var b=readlineSync.questionInt("enter second number: ")
if (a>b){
   console.log(a,"is greater number ")
}
else{
   console.log(b,"is greater number")
}
