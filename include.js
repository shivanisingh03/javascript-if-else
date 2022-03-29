let readlineSync=require("readline-sync")
var name=readlineSync.question("enter the name: ")
if ("ly".includes(name)){
    console.log(name+"ing")
}                                     
else if ("ing".includes(name)){
    console.log(name+"ly")
}
else if ("lying".includes(name)){
    console.log(name+"add")
}






