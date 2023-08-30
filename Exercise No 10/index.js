//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. Then write one sentence
//describing what the program does.
//write a Program to calculate the two numbers,
function calculate(num1, num2) {
    return num1 + num2;
}
;
console.log(calculate(11, 54));
function printID(id) {
    if (typeof id == "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
;
printID("1");
