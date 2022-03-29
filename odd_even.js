

let readlineSync=require("readline-sync")
var number=readlineSync.questionFloat("enter the number: ")
if (number%2==0){
    console.log("even number ")

}
else{
    console.log("odd number ")
}

