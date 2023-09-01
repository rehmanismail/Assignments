import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter the first Number",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter the second Number",
    },
    {
        type: "list",
        name: "Operator",
        choices: ["+", "-", "*", "/"],
        message: "Select Operator",
    }
]);
console.log(answers);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("Your result is =", result);
}
else {
    console.log("Invalid Input");
}
