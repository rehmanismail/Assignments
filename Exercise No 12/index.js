//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each messageshould be the same, 
//but each message should be personalized with the person’s name.
var names = ['Abdul Ahad', 'Hasnat', 'Gulsher'];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Good Morning! ".concat(name_1, ", How are you"));
}
