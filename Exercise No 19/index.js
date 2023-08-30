// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
//  the number of people you are inviting to dinner.
// Add a Guests for Dinner
var guestsDinner = ['Awais', 'Dilshad', 'Rehman', 'Faran'];
//To count the guests for your dinner 
function countguestsDinner(guests) {
    return guests.length;
}
;
//Count the number of guests in a dinner
var numberOfguests = countguestsDinner(guestsDinner);
//print a message for invite your dinner
console.log("I invite your dinner for ".concat(numberOfguests, " Guests"));
