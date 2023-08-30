//  Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
//Call the Function of Describe_City;
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown Country"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karach", "Pakistan");
describe_city("Delhi", "India");
describe_city("Jaddah");
