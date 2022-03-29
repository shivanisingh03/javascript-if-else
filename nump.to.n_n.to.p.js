//diffrent logic 

let readlineSync=require("readline-sync")

var num=readlineSync.questionInt("enter the number: ")

if (num=="-"){
    console.log(num)
}
else{
    console.log(-num)
}

