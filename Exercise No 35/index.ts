// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

//Store a Animals names in the list;

const animal_Names = ["Dog","Rabbit","Cat"];

// Using the for loop to print a animals names;

for (let i=0;i<animal_Names.length;i++){
    console.log("A " +animal_Names[i]+ " would make a great pet.");
}

//print a line about your animals;
console.log("All of these animals include in this list,We are great pets.");
