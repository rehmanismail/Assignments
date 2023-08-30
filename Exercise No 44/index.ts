// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.


//Function of items that accept with a person;

function personSandwiches(...sandwiches: any){
    console.log("Making the Sandwich using the flavours\n");
    for (let sandwiche of sandwiches){
        console.log(sandwiche);
    }
    
}
personSandwiches("Turkey", "Lettuce", "Tomato", "Mayonnaise"),

//Call the Function Three Times, Using Different number of Arguments;

personSandwiches("Ham", "Swiss Cheese", "Mustard");
personSandwiches("Peanut Butter", "Jelly");





