// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make
// one happen. Change an index in one of your programs to produce an index error. Make sure you correct the
//  error before closing the program.
//Array List 
function ArrayError(guestList) {
    var ArrayError = guestList.splice(0, 1, 2, /1);, console.log(ArrayError));
}
ArrayError(['Rehman', 'Ahad', 'Hasnat', 'Ahmed']);
