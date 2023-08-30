
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make 
//a list that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
let favoriteTransportation: Array<[transport: string,brand: string]> = [];
favoriteTransportation.push(["Car","Toyota"]);
favoriteTransportation.push(["MotorCycle","Honda"]);
favoriteTransportation.push(["Bike","Sohraab"]);
console.log(favoriteTransportation);

favoriteTransportation.forEach(([transport, brand]) => 
{console.log(`I would like to own a ${brand} ${transport}`)}
);