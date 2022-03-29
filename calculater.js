var readlineSync=require("readline-sync")
var num1=readlineSync.questionInt("enter the first number: ")
var num2=readlineSync.questionInt("enter the second number: ")
var symbol=readlineSync.question("enter the symbol: ")
if (symbol=="+"){
    console.log(num1+num2)
}
else if(symbol=="-"){
    console.log(num1-num2)
}
else if(symbol=="*"){
    console.log(num1*num2)
}
else if(symbol=="/"){
    console.log(num1/num2)
}
else if(symbol=="%"){
    console.log(num1%num2)
}


