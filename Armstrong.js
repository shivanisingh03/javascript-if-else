let readlineSync=require("readline-sync")
var number=readlineSync.questionInt("Enter the number ")
var a=number%10
var b=number/10
var c = Math.floor(b);
var d=c%10
var e=number/100
var f = Math.floor(e);
var j=f%10
var d =j**3+d**3+a**3
if (d==number){
    console.log("Armostrong")
}
else{
    console.log("Not Aemostrong")
}







 