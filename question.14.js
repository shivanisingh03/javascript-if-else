let readlineSync=require("readline-sync")
var age=readlineSync.questionInt("enter a age: ")

if (age>=5){
   console.log("go to school")
}
if (age>=18){
   console.log("can vote in elections")
}
if (age>=21){
   console.log("can drive a car")
}
if (age>=24){
   console.log("can marry")
}
if (age>25){
   console.log("can legally drink")
}
