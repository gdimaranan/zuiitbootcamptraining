// console.log("Hello World");

// [SECTION] Objects
/*
    - An object is a data type that is used to represent real world objects
    - It is a collection of related data and/or functionalities
    - In JavaScript, most core JavaScript features like strings and arrays are objects (Strings are a collection of characters and arrays are a collection of data)
    - Information stored in objects are represented in a "key:value" pair
    - A "key" is also mostly referred to as a "property" of an object
    - Different data types may be stored in an object's property creating complex data structures
*/

// Creating objects using object initializers/literal notation

let cellphone = {

	// key: value
	name: 'Nokia 3210',
	manufactureDate: 1999
};

console.log('Result from creating objects using initializer/literal notation:');
console.log(cellphone);
console.log(typeof cellphone);

// Creating objects using a constructor function

// Example of Constructor Function
// blueprint
function laptop(name, manufactureDate) {

	// The "this" keyword allows to assign a new object's properties by associating them with values received from a constructor function's parameters
	// this.key = parameter;
	this.name = name;
	this.manufactureDate = manufactureDate;
};

// Create an instance of an object
// The "new" operator creates an instance of an object
let myLaptop = new laptop('Lenovo', 2008);
console.log('Result from creating objects using object constructors:');
console.log(myLaptop);

let myLaptop1 = new laptop('Macbook Air', 2020);
console.log('Result from creating objects using object constructors:');
console.log(myLaptop1);

// Returns "undefined" without the "new" operator because the "Laptop" function does not have a return statement
let oldLaptop = laptop('Protal R2E CCMC', 1980);
console.log('Result from creating objects using object constructors:');
console.log(oldLaptop);

// Creating empty objects
let computer = {};
let myComputer = new Object();

console.log(computer);
console.log(myComputer);

// [SECTION] Accessing Object Properties

// Using dot notation
console.log('Result from dot notation:' + myLaptop1.name);

// Using the square bracket notation
console.log('Result from square bracket notation:' + myLaptop1['name']);

// Accessing array objects
let array = [myLaptop, myLaptop1];

console.log(array);

// Using dot notation
console.log(array[0].name);

// Using square bracket notation
console.log(array[0]['name']);

// [SECTION] Initializing/Adding/Deleting/Reassigning Object Properties

let car = {};

// Initializing/Adding using dot notation
car.name = 'Honda Civic';
console.log('Result from adding properties using dot notation:');
console.log(car);

// Initializing/Adding using square bracket notation
car['manufactureDate'] = 2019;
console.log('Result from adding properties using square bracket notation:');
console.log(car);

// Deleting object properties
delete car.manufactureDate;
console.log('Result from deleting properties:');
console.log(car);

// Reassigning object properties
car.name = 'Dodge Charger R/T';
console.log('Result from reassigning properties:');
console.log(car);

// [SECTION] Object Method

let person = {
	name: 'John',
	// method
	talk: function() {
		console.log("Hello my name is " + this.name);
	}
}

console.log(person);
console.log('Result from object methods:');
person.talk();

// Adding methods to objects
person.walk = function() {
	console.log(this.name + " walked 25 steps forward");
} 
person.walk();

// Methods are useful for creating reusable functions that perform tasks related to objects
let friend = {
    firstName: 'Joe',
    lastName: 'Smith',
    address: {
        city: 'Austin',
        country: 'Texas'
    },
    emails: ['joe@mail.com', 'joesmith@email.xyz'],
    introduce: function() {
        console.log('Hello my name is ' + this.firstName + ' ' + this.lastName);
        console.log('Hello my name is ' + this.address.country + this.emails[1]);
    }
};

friend.introduce();
