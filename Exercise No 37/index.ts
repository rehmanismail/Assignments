// Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.


//Modify the Make Shirt Function;

function make_shirt(size: string,message: string){
      console.log(`My shirt is ${size}, And we can ${message}`);
}
make_shirt("Large","I love TypeScript");

// Medium shirt to default message;
const new_shirt = "Medium";
let message = "And we can delivery for two days";
console.log(`My Shirt is ${new_shirt}, ${message}`);
