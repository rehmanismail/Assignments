//Store a person’s name in a variable, and then print that person’s 
//name in lowercase, uppercase, and titlecase.
//lowercase

//LowerCase

let personName: string = 'Rehman';
let lowercase = personName.toLowerCase();
console.log(lowercase);


//UpperCase
let uppercase = personName.toUpperCase();
console.log(uppercase);

//TitleCase

let words: string[] = personName.split(" ");
let titlecase: string = " ";
for (let i = 0; i < words.length; i++){
    titlecase +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
};
console.log(titlecase);