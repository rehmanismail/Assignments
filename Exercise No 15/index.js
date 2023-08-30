// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
// // GuestList
// let guestList = ['Abdul Ahad', 'Rehman', 'Hasnat', 'Gulsher']
// //Person name cannot make this dinner
// let personNameCannotMakeDinner = "Rehman";
// //New Person Name to Invite your dinner
// let newPerson = "Raza";
// let indexOfpersonNameCannotMakeDinner = guestList.indexOf(personNameCannotMakeDinner);
// if (indexOfpersonNameCannotMakeDinner !== -1){
//     guestList[indexOfpersonNameCannotMakeDinner] = newPerson;
// }
// console.log(personNameCannotMakeDinner + "  cannot make the dinner.");
// guestList.forEach((guestList) => {
//     console.log("My " + guestList + "I am invited to your dinner.");
// });
//Guest List
var guestList = ['Abbullah', 'Rizwan', 'Tariq', 'Irfan'];
//Person Name cannot make this dinner
var personNameCannotMakeDinner = "Talha";
//Add a new person Invite your dinner
var newPerson = "Rehman";
//Let index of personName cannot make this dinner
var indexOfpersonNameCannotMakeDinner = guestList.indexOf(personNameCannotMakeDinner);
//indexofpersonName ! == -1
if (indexOfpersonNameCannotMakeDinner !== -1) {
    guestList[indexOfpersonNameCannotMakeDinner] = newPerson;
}
;
console.log(personNameCannotMakeDinner + " cannot make this dinner");
guestList.forEach(function (guestList) {
    console.log("My " + guestList + " I am invite your dinner");
});
