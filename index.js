#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
const myPinCode = 9876;
const pinCode = await inquirer.prompt({
    name: "pin",
    message: "Enter your Pin Code: ",
    type: "number",
});
if (pinCode.pin === myPinCode) {
    console.log("Correct pin entered, Please proceed.");
    const actionPerformed = await inquirer.prompt([
        {
            message: "Select your Account Type",
            name: "account",
            type: "list",
            choices: ["Current", "Savings"],
        },
        {
            message: "Select one of the operation to perform",
            name: "operation",
            type: "list",
            choices: ["Withdraw Cash", "Display Current Balance"],
        },
    ]);
    console.log(actionPerformed);
    if (actionPerformed.operation === "Withdraw Cash") {
        let withdrawAmount = await inquirer.prompt([
            {
                message: "Please enter the Widraw Amount: ",
                type: "number",
                name: "amount",
            },
        ]);
        if (withdrawAmount.amount < 20001) {
            myBalance -= withdrawAmount.amount;
            console.log("Your remaining Balance is: " + myBalance);
        }
        else {
            console.log("Your withdraw amount exceeds your Current Balance");
        }
        ;
    }
    else if (actionPerformed.operation === "Display Current Balance") {
        console.log("Your remaining Balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin entered, Try Again.");
}
;
