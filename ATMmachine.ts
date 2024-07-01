import inquirer from "inquirer";

// Initialize user balance and Pin Code
let myBalance = 50000;
let myPin = 1234;

// Print Welcome message
console.log("welcome to my ATM Machine");

async function runATM (){
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin){
    console.log("Pin is Correct, Login Successfully!");
    // console.log(`current Account Balance is ${myBalance}`);

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);

    if(operationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);

        if(amountAns.amount > myBalance){
            console.log("Insufficiant Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
        }
        else if (operationAns.operation === "Check Balance"){
            console.log(`Your Account Balance is: ${myBalance}`);
        }

    }
    else{
        console.log("Pin is Incorrect, Try Again!");
    }
}

runATM();
