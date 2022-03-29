// Takes a number as user input. Check if this number is divisible by 5 and 15 both

let readlineSync=require("readline-sync")
var a=readlineSync.questionInt("enter the number: ")
if (a%5==0 && a%15==0){
   console.log(a,"number is divisible by 5 and 15 both ")
}
else{
   console.log("invalid ")
}
