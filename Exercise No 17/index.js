// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that
//  you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you 
// pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
//  actually have an empty list at the end of your program.
function GuestList() {
    var guests = ['Abdul Ahad', 'Moeez', 'Fahad', 'Fasih'];
    var maxGuests = 2;
    console.log("I invite your only two guests");
    while (guests.length > maxGuests) {
        var removedGuest = guests.pop();
        console.log("".concat(removedGuest, " I cannot invite your dinner"));
    }
    for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
        var guest = guests_1[_i];
        console.log("".concat(guests, " I am thankyou for dinner"));
    }
    guests.length = 0;
    console.log("Guest List:", guests);
}
;
GuestList();
