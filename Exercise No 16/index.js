// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program
// informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// let guestList: string[] = ['Abdul Ahad', 'Rehman', 'Ismail', 'Faran'];
// function addGuest(newGuest: any){
//    const formattedGuest = newGuest.charAt(0).toUpperCase() + newGuest.slice(1).toLowerCase();
//    guestList.push(formattedGuest);
// }
//Add a new guest;
// addGuest('Raza');
// addGuest('Ahmed');
// addGuest('Ali');
//Show the Result
// console.log('New Guest List:', guestList);
// //Guests 
// let guests = ['Abdul Ahad', 'Rehman', 'Hasnat'];
// //add a new one guest on the beginging
// guests.unshift("Gulsher");
// // add a new guest on the middle of array
// guests.splice(Math.floor(guests.length /2), 0, "Faran");
// //add a new guest on the end
// guests.push("Ismail");
// //Good News Message 
// console.log("Guests Eating a Food on the large table");
// guests.forEach(guest => {
//   console.log(`${guest}, I am inviting to your friend for dinner at saturday night`)
// });
//Guest list
var guestList = ['Abdul Ahad', 'Rizwan', 'Rehman', 'Hasnat'];
//Add a new Person name on the beginging
guestList.unshift("Faran");
//Add a new person name on the middle
guestList.splice(Math.floor(guestList.length / 2), 0, "Ali");
//Add a person name on the end
guestList.push("Awais");
console.log("Guest eating your food on the table");
guestList.forEach(function (guestList) {
    console.log("".concat(guestList, ", I am inviting your Dinner"));
});
