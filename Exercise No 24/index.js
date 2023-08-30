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
var a = 'Apple';
var b = 'Apple';
if (a == b) {
    console.log("Strings are equal: True");
}
else {
    console.log("Strings are not equal: False");
}
//InEquality Strings;
if (a !== b) {
    console.log("Strings are equal: True");
}
else {
    console.log("Strings are not equal: False");
}
//Tests using the lower case function
//True Case
console.log("Tests using the lower case function");
var fullName = "rehman ismail";
var lower = fullName.toLowerCase();
console.log(lower);
if (fullName === lower) {
    console.log("True");
}
else {
    console.log("False");
}
//False Case
if (fullName !== lower) {
    console.log("True");
}
else {
    console.log("False");
}
//Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to;
//True
console.log("Numerical tests Comparison");
var num1 = 30;
var num2 = 20;
if (num1 > num2) {
    console.log("True");
}
else if (num1 < num2) {
    console.log("False");
}
//False
if (num1 <= num2) {
    console.log("True");
}
else if (num1 >= num2) {
    console.log("False");
}
//  Tests using "and" and "or" operators
console.log("AND and OR Comparison");
//True
var number1 = 15;
var number2 = 20;
var c = number1 < number2 && number2 < number1;
console.log(c);
//False
var d = number1 < number2 || number2 < number1;
console.log(d);
// Test whether an item is in a array
console.log("Find the item in an array");
//True
var numbers = [22, 34, 344, 343, 23];
var newNumber = 34;
var itemIsfound = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === newNumber) {
        console.log("True");
        itemIsfound = true;
    }
}
if (itemIsfound == false) {
    console.log("False");
}
// Test whether an item is not in a array
console.log("Find the item cannot present in an array");
//False
var arrayNumbers = [22, 34, 344, 343, 23];
var newArrayNumber = 50;
var arrayItemFound = false;
for (var i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] === newArrayNumber) {
        console.log("True");
        itemIsfound = true;
    }
}
if (arrayItemFound == false) {
    console.log("False");
}
