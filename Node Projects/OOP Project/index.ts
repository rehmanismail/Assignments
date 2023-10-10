class Person{
    public name: string;
    public age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
     }

    public getname(){
        return this.name;
     }
    public setname(){
        return this.name = "Faran Ismail";
     }
    public getage(){
        return this.age;
     }
    public setage(){
        return this.age = 10;
     }
    public speak(){
        console.log(`My Name is ${this.name} and ${this.age}`);
    }
}
let result = new Person("Rehman Ismail",20);
console.log(result);

console.log("Get the name of Person:");
let result1 = result.getname();
console.log(result1);

console.log("Set the name of Person:");
let result2 = result.setname();
console.log(result2);

console.log("Get the age of Person:");
let result3 = result.getage();
console.log(result3);

console.log("Set the age of Person:");
let result4 = result.setage();
console.log(result4);

console.log(result.speak());


