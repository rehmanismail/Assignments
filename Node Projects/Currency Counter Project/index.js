import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0035,
        "GBP": 0.0029,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 340.58,
        "GBP": 1,
    },
    "USD": {
        "PKR": 282.10,
        "GBP": 0.83,
        "USD": 1,
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your currency",
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your conversion currency",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount",
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid inputs");
}
