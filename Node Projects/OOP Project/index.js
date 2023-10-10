var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getname = function () {
        return this.name;
    };
    Person.prototype.setname = function () {
        return this.name = "Faran Ismail";
    };
    Person.prototype.getage = function () {
        return this.age;
    };
    Person.prototype.setage = function () {
        return this.age = 10;
    };
    Person.prototype.speak = function () {
        console.log("My Name is ".concat(this.name, " and ").concat(this.age));
    };
    return Person;
}());
var result = new Person("Rehman Ismail", 20);
console.log(result);
console.log("Get the name of Person:");
var result1 = result.getname();
console.log(result1);
console.log("Set the name of Person:");
var result2 = result.setname();
console.log(result2);
console.log("Get the age of Person:");
var result3 = result.getage();
console.log(result3);
console.log("Set the age of Person:");
var result4 = result.setage();
console.log(result4);
console.log(result.speak());
