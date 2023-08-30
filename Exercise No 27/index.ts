// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Colors of Alien 

const alienColors = ['Green','Yellow','Red'];

// The colors of Aliens;

const alien1 = "Green";
const alien2 = "Yellow";
const alien3 = "Red";

// Alien is Green to print a message;
console.log(alien1);
if (alien1 === "Green"){
    console.log("The player earned 5 points.");
}
else{
    console.log("The player has not earned 5 points.");
}

// Alien is Yellow to print a message;
console.log(alien2);
if (alien2 === "Yellow"){
    console.log("The player earned 10 points.");
}
else{
    console.log("The player has not earned 10 points.");
}

// Alien is Red to print a message;
console.log(alien3);
if (alien3 === "Red"){
    console.log("The player earned 15 points.");
}
else{
    console.log("The player has not earned 15 points.");
}

// To print a message for aliens colors is correct;
console.log(`The Alien-1 is ${alien1}`);

console.log(`The Alien-1 is ${alien2}`);

console.log(`The Alien-1 is ${alien3}`);