// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
// statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the 
// fruit is in your array, the if block should print a statement,
// such as You really like bananas!

//Array for Favourite Fruits

const favorite_fruits = ['Banana','Apple','Mango'];

//Five Statements

if (favorite_fruits.includes("Banana")){
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("Apple")){
    console.log("You really like apple!");
}
if (favorite_fruits.includes("Mango")){
    console.log("You really like mango!");
}
if (favorite_fruits.includes("Orange")){
    console.log("You really like orange!");
}
if (favorite_fruits.includes("Grapes")){
    console.log("You really like grapes!");
}