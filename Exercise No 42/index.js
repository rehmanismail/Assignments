// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
// call the function Make_Great();
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("This is a Great ".concat(magicians[i]));
    }
}
make_great(["Jhonny", "Doe", "Honey", "Merry"]);
