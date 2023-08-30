// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
// try more comparisons, write more tests. Have at least one True and one False result for each of the 
// following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

//Creating a comparision of Conditional Test and  at least result True and False;

//Tests for equality and inequality with strings

//Equality Strings;
let a = 'Apple';
let b = 'Apple';

if (a == b){
    console.log("Strings are equal: True");
}
else{
    console.log("Strings are not equal: False");
}
//InEquality Strings;
if (a !== b){
    console.log("Strings are equal: True");
}
else{
    console.log("Strings are not equal: False");
}

//Tests using the lower case function
//True Case
console.log("Tests using the lower case function");
let fullName = "rehman ismail";
let lower = fullName.toLowerCase();
console.log(lower);
if (fullName === lower){
    console.log("True");
}
else{
    console.log("False");
}
//False Case
if (fullName !== lower){
    console.log("True");
}
else{
    console.log("False");
}


//Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to;

//True
console.log("Numerical tests Comparison")
const num1 = 30;
const num2 = 20;

if (num1 > num2){
   console.log("True");
}
else if (num1 < num2){
    console.log("False");
}

//False

if (num1 <= num2){
    console.log("True");
 }
 else if (num1 >= num2){
     console.log("False");
 }
 
//  Tests using "and" and "or" operators
console.log("AND and OR Comparison");
//True

let number1 = 15;
let number2 = 20;
let c = number1 < number2 && number2 < number1;
console.log(c);

//False
let d = number1 < number2 || number2 < number1;
console.log(d);

// Test whether an item is in a array
console.log("Find the item in an array");
//True
let numbers = [22,34,344,343,23];
let newNumber = 34;
let itemIsfound = false;
for (let i=0;i<numbers.length;i++){
    if (numbers[i] === newNumber){
        console.log("True");
        itemIsfound = true;
    }
}
if(itemIsfound==false){
    console.log("False");
}

// Test whether an item is not in a array
console.log("Find the item cannot present in an array");
//False
let arrayNumbers = [22,34,344,343,23];
let newArrayNumber = 50;
let arrayItemFound = false;
for (let i=0;i<arrayNumbers.length;i++){
    if (arrayNumbers[i] === newArrayNumber){
        console.log("True");
        itemIsfound = true;
    }
}
if(arrayItemFound==false){
    console.log("False");
}