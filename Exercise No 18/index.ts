// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// let placesToVisit: string[] = [
//     "Tokyo",
//     "Paris",
//     "New York",
//     "Machu Picchu",
//     "Sydney"
//   ];
  
//   // Print the array in its original order
//   console.log("Original Order:", placesToVisit);
  
//   // Print the array in alphabetical order without modifying the actual list
//   let alphabeticalOrder = [...placesToVisit].sort();
//   console.log("Alphabetical Order:", alphabeticalOrder);
  
//   // Show that the original array is still in its original order
//   console.log("Original Order:", placesToVisit);
  
//   // Print the array in reverse alphabetical order without changing the order of the original list
//   let reverseAlphabeticalOrder = [...placesToVisit].sort((a, b) => b.localeCompare(a));
//   console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
  
//   // Show that the original array is still in its original order
//   console.log("Original Order:", placesToVisit);
  
//   // Reverse the order of the list
//   placesToVisit.reverse();
//   console.log("Reversed Order:", placesToVisit);
  
//   // Reverse the order of the list again to get back to its original order
//   placesToVisit.reverse();
//   console.log("Back to Original Order:", placesToVisit);
  
//   // Sort the array in alphabetical order
//   placesToVisit.sort();
//   console.log("Sorted in Alphabetical Order:", placesToVisit);
  
//   // Sort the array in reverse alphabetical order
//   placesToVisit.sort((a, b) => b.localeCompare(a));
//   console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
  
//List for visiting places
let placesToVisit: string []= ['Lahore', 'Karachi', 'Islamabad', 'Faisalabad', 'Sailkot'];
console.log('Original State:',placesToVisit);

//Alphabtic Order
let alphabeticalOrder = [...placesToVisit].sort();
console.log('Alphabetical State:',alphabeticalOrder);

//oringinal state
console.log('Original State:',placesToVisit);

//reverse state
let reverseAlphabeticalOrder = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("Reversable Order:",reverseAlphabeticalOrder);

//oringinal state
console.log('Original State:',placesToVisit);

//oringinal state to reverse state
placesToVisit.reverse();
console.log("Original state to Reverse:",placesToVisit);

//oringinal state
console.log('Original State:',placesToVisit);

//sorted for alphabetical state
placesToVisit.sort();
console.log("Sort to Alphabetic:",placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("reverse to sort alphabetic state:",placesToVisit)