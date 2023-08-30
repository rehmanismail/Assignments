// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
//  the number of people you are inviting to dinner.

// Add a Guests for Dinner
const guestsDinner: string[] = ['Awais', 'Dilshad', 'Rehman', 'Faran'];

//To count the guests for your dinner 
function countguestsDinner(guests: string[]): number {
    return guests.length;
};

//Count the number of guests in a dinner
const numberOfguests = countguestsDinner(guestsDinner);

//print a message for invite your dinner
console.log(`I invite your dinner for ${numberOfguests} Guests`);