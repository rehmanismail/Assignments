import inquirer from "inquirer";



const answers: {
    userID: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number,

} = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter the userID:",
    },
    {
        type: "number",
        name: "userPIN",
        message: "Enter the userPIN:",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current","Saving"],
        message: "Select your account type",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash","WithDraw"],
        message: "Select your Transaction",
        when(answers){
            return answers.accountType
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000,5000,10000,200000],
        message: "Select your amount",
        when(answers){
            return answers.transactionType == "Fast Cash"
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers){
            return answers.transactionType == "WithDraw";
        }
    }
]);

if (answers.userID || answers.userPin){
    const balance = 5000;
    console.log(balance);
    const Enteramount = answers.amount;
    if (balance >= Enteramount){
        const remaining = balance - Enteramount;
        console.log("Your remaining balance is",remaining);
    }
    else{
        console.log("Insufficient balance");
    }
}

