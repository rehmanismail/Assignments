// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
//Function of items that accept with a person;
function personSandwiches() {
    var sandwiches = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwiches[_i] = arguments[_i];
    }
    console.log("Making the Sandwich using the flavours\n");
    for (var _a = 0, sandwiches_1 = sandwiches; _a < sandwiches_1.length; _a++) {
        var sandwiche = sandwiches_1[_a];
        console.log(sandwiche);
    }
}
personSandwiches("Turkey", "Lettuce", "Tomato", "Mayonnaise"),
    //Call the Function Three Times, Using Different number of Arguments;
    personSandwiches("Ham", "Swiss Cheese", "Mustard");
personSandwiches("Peanut Butter", "Jelly");
