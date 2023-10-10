import inquirer from "inquirer";

const answers: {
    Sentence: string;
} = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter the Sentence to count the word",
    }
])

const words = answers.Sentence.split(" ");
console.log(words.length);
