// console.log("Hello World!");

/*	
	ES6 Updates:

	ES6 is one of the latest versions of writing JavaScript and in fact is one of the latest major update to JS.
*/

// [SECTION] Variable Declaration

// let,const - are ES6 updates to update the standard of creating variables.

// console.log(sampleLet);
// let sampleLet = 'Sample'; -> error because of hoisting

// var - keyword used before the ES6 Update

console.log(sampleVar);
var sampleVar = 'Sample'; // undefined

// [SECTION] Exponent Operator

// Math.pow() allows us to get the result of the number raised to the given exponent
/*
	Syntax:
		Math.pow(base, exponent)
*/

let fivePowerOfThree = Math.pow(5,3);
console.log(fivePowerOfThree);

// Exponent Operator (**) allows us to get the result of a number raised to a given exponent. It is used as an alternative to Math.pow()

let sixPowerOfEight = 6 ** 8;
console.log(sixPowerOfEight);

// Square Root
// Get the square root of 25
let squareRoot = 25 ** 0.5;
console.log(squareRoot);

// [SECTION] Template Literals

// " " and ' ' are called string literals

let word1 = "Javascript";
let word2 = "Java";
let word3 = "is";
let word4 = "not";

let sentence = word1 + " " + word3 + " " + word4 + " " + word2 + "!";
console.log(sentence);

// ' ' backticks allows us to create strings using '' and easily embed JS expressions
// ${} is used in template literals to embed JS expresions and variables. it is also called a placeholder.
let templateSentence = `${word1} ${word3} ${word4} ${word2}!`;
console.log(templateSentence);

// template literals can also be used to embed JS expressions
let templateSentence2 = `The sum of 15 and 25 is ${15 + 25}`;
console.log(templateSentence2);

let user1 = {
	name: 'Michael',
	position: 'Manager',
	income: 50000,
	expenses: 30000
}

let templateSentence3 = `${user1.name} is a ${user1.position}. His income is ${user1.income} and expenses at ${user1.expenses}. His current balance is ${user1.income - user1.expenses}`;
console.log(templateSentence3);

// [SECTION] Destructuring Arrays and Objects
// destructuring will allow us to save array elements or object properties into new variables without having to create/initialize with accessing items/properties one by one

let array1 = ['Meredith', 'Izzie', 'Alex', 'Cristina'];

let char1 = array1[0]; // Meredith
let char2 = array1[1];
let char3 = array1[2];
let char4 = array1[3];

console.log(char1);
console.log(char2);
console.log(char3);
console.log(char4);

// Array Destructuring is when you save array items into variables
// In arrays, order matters and that goes the same for destructuring
let [character1, character2, character3, character4] = array1;

console.log(character1);
console.log(character2);
console.log(character3);
console.log(character4);

let [female1, female2,,female3] = array1;

console.log(female1);
console.log(female2);
console.log(female3);

let pokemon1 = {
	name: 'Balbasaur',
	type: 'Grass',
	level: 10,
	moves: ['Razor Leaf', 'Tackle', 'Leech Seed']
}

// Object Destructuring allows us to get the value of a property and save in a variable of the same name.
// what matters are the keys/property names.
// the variable name should exactly match the property name.
let {type, level, name, moves, personality} = pokemon1

console.log(type);
console.log(level);
console.log(name);
console.log(moves);
console.log(personality); // undefined

// Destructing in a function

function greet(object) {

	// When passed user1, object now contains the key-value pairs of user1
	/*let object = {
		name: 'Michael',
		position: 'Manager',
		income: 50000,
		expenses: 30000
	}*/

	let {name} = object; // let {name} = user1

	console.log(`Hello ${name}`);
	console.log(`${name} is my friend!`);
	console.log(`Goodluck, ${name}`);
};

greet(user1);

// [SECTION] Arrow Functions
// It is an alternative way of writing functions in JS. However, there are significant pros and cons between traditional and arrow function

// Traditional Function
function displayMsg() {

	console.log("Hello World!");
};

displayMsg();

// Arrow Function
// we don't usually use the "let" keyword to assign our arrow function to avoid updating variable
const displayArrow = () => {

	console.log("Hello World from Arrow");
};

displayArrow();

// arrow and traditional functions are pretty much the same. they are functions, however, there are some key differences.
// Implicit Return is the ability of an arrow function to return value without the use of return keyword.

// Traditional Function
function addNum(num1, num2) {

	return num1 + num2;
}

let sum1 = addNum(5, 10);
console.log(sum1);

// Arrow Function
// Implicit return will only work on an arrow function written in one line and without {}
// if an arrow function is written in more than one line and with a {} then, we will need a return keyword
const addNumArrow = (num1, num2) => num1 + num2;

let sum2 = addNumArrow(5, 10);
console.log(sum2);

// Traditional Functions and Arrow Functions in Object Methods
let character = {
	name: 'Cloud Strife',
	occupation: 'Soldier',
	introduceName: function() {
		// In a traditional function as a method, this refers to the object where the method is.
		console.log(`Hi! I am ${this.name}`);
	},
	introduceOccu: () => {
		// In an arrow function as a method, this actually refers to the global window object document.
		console.log(`I am a ${this.occupation}`);
		console.log(this);
	}
}

character.introduceName();
character.introduceOccu();

// [SECTION] Arrow Functions in Array Methods

let numberArray = [2, 10, 3, 10, 5];

// Traditional Function
let reducedNumber = numberArray.reduce(function(x, y) {

	return x + y;
});

console.log(reducedNumber);

// Arrow Function
let reduceNumberArrow = numberArray.reduce((x, y) => {

	return x + y;
})

console.log(reduceNumberArrow);

// Implicit Return
let reducedNumberImplicit = numberArray.reduce((x, y) => x + y);

console.log(reducedNumberImplicit);

// Traditional Function
let mapNum = numberArray.map(function(number) {

	return number * 2;
});

console.log(mapNum);

// Arrow Function
let mapNumArrow = numberArray.map((number) => {

	return number * 2;
})

console.log(mapNumArrow);

// Implicit Return
let mapNumImplicit = numberArray.map((number) => number * 2);

console.log(mapNumImplicit);

// [SECTION] Class Based Object Blueprint
// In javascript, classes are templates of objects 
// we can use classes to create objects following the structure of the class similar to a constructor function

// Constructor Function
function Pokemon(name, type, level) {

	this.name = name;
	this.type = type;
	this.level = level;
};

let pokemon2 = new Pokemon("Pikachu", "Electric", 25);
console.log(pokemon2);

// with the advent of ES6, we are now introduced to a new way of crating objects with a blueprint with the use of classes

class Car {

	constructor(brand, model, year) {

		this.brand = brand;
		this.model = model;
		this.year = year;
	}
}

let car1 = new Car("Toyota", "Vios", "2002");
console.log(car1);
