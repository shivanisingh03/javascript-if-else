let readlineSync=require("readline-sync")

var name=readlineSync.question("enter the name: ")
var pass=readlineSync.question("enter the password: ")
if (!pass.includes(name)){
    console.log("incorrect")
}
else{
    console.log("coreect")
}
