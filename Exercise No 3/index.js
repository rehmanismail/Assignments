//Store a person’s name in a variable, and then print that person’s 
//name in lowercase, uppercase, and titlecase.
//lowercase
//LowerCase
var personName = 'Rehman';
var lowercase = personName.toLowerCase();
console.log(lowercase);
//UpperCase
var uppercase = personName.toUpperCase();
console.log(uppercase);
//TitleCase
var words = personName.split(" ");
var titlecase = " ";
for (var i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecase);
