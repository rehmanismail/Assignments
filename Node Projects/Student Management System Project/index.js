import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "Courses",
        message: (chalk.bgRed.yellow("Select the courses :")),
        choices: ["Web Designing", "Graphic Designing", "Digital Marketing"]
    },
    {
        type: "input",
        name: "addStudents",
        message: (chalk.bgWhite.green("You can add the students")),
    },
    {
        type: "input",
        name: "studentID",
        message: "Enter the Student_ID :",
    },
    {
        type: "number",
        name: "balance",
        message: "Enter the Balance of Course :",
    },
]);
console.log(answers);
