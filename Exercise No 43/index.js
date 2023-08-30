// Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
// Make the Function of Make_Great();
function make_great(magicians) {
    return magicians;
}
var magicians = make_great(["Jhonny", "Doe", "Honey", "Merry"]);
console.log("🚀 ~ file: index.ts:13 ~ magicians:", magicians);
var new_magicians = make_great(["Bean", "Ferozen", "Janni", "Kamato"]);
console.log("🚀 ~ file: index.ts:15 ~ new_magicians:", new_magicians);
for (var i = 0; i < magicians.length; i++) {
    console.log("This a Great ".concat(magicians[i], "."));
}
