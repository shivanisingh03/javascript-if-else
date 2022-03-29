// Write a python program to input any alphabet and check whether it is vowel or consonant.

let readlineSync=require("readline-sync")
var a=readlineSync.question("enter your value: ")
if (a>"a" && a<"z"){
    console.log("alphabet")
}
else{
    console.log("not alphabet")
}



