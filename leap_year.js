// Write a python program to check whether a year is leap year or not.


let readlineSync=require("readline-sync")
var year=readlineSync.questionInt("enter the year: ")
if (year%400==0 || year%4==0 && year%100!=0){
    console.log("leap year")
}
else{
    console.log("normal year")
}




