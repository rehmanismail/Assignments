// Think of something you could store in a array. For example, you could make a list of mountains,
//  rivers, countries, cities, languages, or anything else you’d like. Write a program that creates
// a list containing these items.
//Array of Many things
var beautifulPlaces = ['Mountains', 'rivers', 'countries', 'cities', 'languages'];
//Add a new thing on this array
beautifulPlaces.splice(Math.floor(beautifulPlaces.length / 2), 0, "Flowers");
//Print the new list for a array
console.log(beautifulPlaces);
