// import inquirer from "inquirer";
// let todos: string[] = [];
// let loop = true;
// while(loop){
// const answers: {
//     TODO: string,
//     addmore: boolean,
// } = await inquirer.prompt([
//     {
//         type: "input",
//         name: "TODO",
//         message: "What do you want to add in yout todo?"
//     },
//     {
//         type: "confirm",
//         name: "addmore",
//         message: "Do you want to add more todo?",
//         default: false,
//     }
// ])
// const {TODO, addmore} = answers;
// console.log(answers);
// loop = addmore;
// if (TODO){
//    todos.push(TODO);
// }
// else{
//     console.log("Kindly add valid input");
// }
// }
// console.log(todos);
// if (todos.length > 0){
//     console.log("Your Todo List");
// todos.forEach(todo => {
//     console.log(todo);
// });
// }
// else{
//     console.log("No TODOS found");
// }
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "Add a ToDo",
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Add more ToDo",
            default: false,
        }
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly Add more TODO");
    }
}
console.log(todos);
if (todos.length) {
    todos.forEach(todo => {
        console.log("Your List");
        console.log(todo);
    });
}
else {
    console.log("No TODO Found");
}
