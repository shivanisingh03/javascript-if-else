console.log("welcome")
console.log("IN ICICI BANK")
console.log("ENTER YOUR CARD")
console.log("FOR ENGLISH ENETR (1)")
console.log("FOR HINDI ENETR (2)")
var readlineSync=require("readline-sync")
var language=readlineSync.question("enetr your language what do you want for english enter 1 and for english enter 2")
if (language==1){
    console.log("your proccess going in" ,"english")
    var pin_code1=readlineSync.questionInt("enter your correct in code = ")
    var pin_code2=readlineSync.questionInt("enter your correct in code = ")
    if (pin_code1==pin_code2){
        console.log("which inquary do you want for that enter this numbers ")
        console.log("1. cash withdrawal ")
        console.log("2. balence inquary ")
        console.log("3. saving ")
        console.log("4. money transfar ")
        var inquary=readlineSync.question("enter here which inquary do you want ")
        if (inquary==1){
            console.log("cash withdrawal")
            var amount=readlineSync.questionInt("enter amount ")
            if (amount>=500){
                console.log(" your transaction is in process ")
                console.log(" please wait ")
                console.log("please collect your cash ")
                console.log("thanks for using icici bank ")
                

            }
            else{
                console.log("that note is not abilable ")
            }
        }
        else if (inquary==2){
            console.log("balence inquary")
            console.log("you have that much money in your account ")
            console.log("thanks for using icici bank ")

        }
        else if (inquary==3){
        console.log("saving ")
        console.log("you have saving account ")
        console.log("thanks for using icici bank ")

        }
        else if (inquary==4){
            console.log("money transfar")
            console.log("only 500 to more and 10,000 less money transfar ")
            var amount=(" enter amount how much money do you want to transfar")
            if (amount>=500 && amount<=10000){
                (" your money transfar successful ")
            }
            else
            {
            console.log("not successful ")

            }
        }

    }
}
