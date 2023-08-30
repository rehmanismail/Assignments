// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the
//  alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

//Chooses a color for alien;
const alien_Colors = ['Green','Yellow','Red'];
const alien_color = "Green";
console.log(alien_color);

let colorIsnot = false;


//Print a Satement for alien color is green;

if (alien_color === "Green"){
    console.log("The player just earned 5 points for shooting the alien.");
    colorIsnot = true;
}
if (colorIsnot == false){
    console.log("The player just earned 10 points.");
};

// Write one version of this program that runs the if block and another that runs the else block.

//alien Color
const alien = "Blue";
if (alien === "Blue"){
    console.log("If Block is Run");
}
else{
    console.log("Else Block is Run");
}