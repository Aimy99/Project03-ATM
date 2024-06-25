#! usr/bin/env node

import inquirer from "inquirer";
let myBalance: number = 20000;
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
      choices: ["Withdraw Cash", "Display Current Balance", "Deposit Amount"],
    },
  ]);

  console.log(actionPerformed);

  if (actionPerformed.operation === "Withdraw Cash") {
    let withdrawCash = await inquirer.prompt([
      {
        message: "Please enter the Widraw Amount: ",
        type: "number",
        name: "cash",
      },
    ]);
    if (withdrawCash.cash < 20001) {
      myBalance -= withdrawCash.cash;
      console.log("Your remaining Balance is: " + myBalance);
    } else {
      console.log("Your withdraw amount exceeds your Current Balance");
    }
  } else if (actionPerformed.operation === "Display Current Balance") {
    console.log("Your Current Balance is: " + myBalance);
  } else if (actionPerformed.operation === "Deposit Amount") {
    let depositAmount = await inquirer.prompt([
      {
        message: "Enter the amount you want to Deposit: ",
        type: "number",
        name: "amount",
      },
    ]);
    myBalance += depositAmount.amount;
    console.log("Your New Balance is: " + myBalance);
  }
} else {
  console.log("Incorrect pin entered, Try Again.");
}
