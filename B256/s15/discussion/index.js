// console.log("hello world");

/*    1. The single-line comment denoted by two slashes
    2.The multi-line comment denoted by a slash and asterisk
*/

//synatx and statement
	// Statements in programming are instructions that we tell the computer to perform
	// JS statements usually end with semicolon (;)
	// Semicolons are not required in JS, but we will use it to help us train to locate where a statement ends
	// A syntax in programming, it is the set of rules that describes how statements must be constructed
	// All lines/blocks of code should be written in a specific manner to work. This is due to how these codes were initially programmed to function and perform in a

//section variables 
	// Any information that is used by an application is stored in what we call a "memory"
// When we create variables, certain portions of a device's memory is given a "name" that we call "variables"
// This makes it easier for us associate information stored in our devices to actual "names" about information


/*synatx let const variableName*/

// let myVariable;
// console.log(myVariable);

// let hello;
// console.log(hello);

// let	productName = 'Desktop Computer';
// console.log(productName);

// let	productPrice = 19900;
// console.log(productPrice);

// const interest = 3.530;

// productName = "laptop";
// console.log(productName);

// productDesc ="portable";
// console.log(productDesc);

// interest = (6);
// console.log(interest);

// let friend = 'kate';
// friend = 'jane';

// let	friends = 'kate';
// let friends = 'jane';

let supplier;

// initialization
supplier = "john smith tradings";
console.log(supplier);

supplier = "Jane Smith tradings";
console.log(supplier);

// const pi; bwal idelcare pag ganyan declaration ng initialization
// pi = 3.14;
// console.log(pi);

// var vs let/const 
// var is is also used in decalring our variable. but it is develope 
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// var - is also used in declaring a variable, but is its develeoped in ECMAScript1 
// (1997) and let/const is introduced in ES6(2015)

a = 5;
console.log(a);
var a;

// b = 5; dont do this kung hindi ka nmn gagamit var
// console.log(b);
// let b;

// local and global sxope

// global
let	outerVariable ='hello';
{
	// local
	let innerVariable = "Its me again";
}
console.log(outerVariable);
// console.log(innerVariable); cannot defined in local variale
 
// global
const outerVariable2 = "hi";
{
	// local scope
	const innerVariable2 = "I'm back";
}
console.log(outerVariable2);
// console.log(innerVariable2); cannot defined in local variale

// multiple variable decalration
// wehn you decalre variable in one line.

let productCode = 'DC107', productBrand ="Dell";
console.log(productCode, productBrand);


// section data types

// string 
// Strings are a series of characters that create a word, a phrase, a sentence or anything related to creating text// Strings in JavaScript can be written using either a single (') or double (") quote
// In other programming languages, only the double quotes can be used for creating strings

let country = "philippines";
let	provice = "Metro manila";

// conacatenation Strings
// Multiple string values can be combined to create a single string using the "+" symbol

let address = provice + ' ' + country;
console.log(address); 


let greeting = 'Mabuahy' + 'country';
console.log(greeting);

// escape character in JS "(\n)""
// creates a new line in string

let mailAddress = "Metro Manila \n\n philippines";
console.log(mailAddress);


//John's employess went home early.
// Using the double quotes along with the single quotes can allow us to easily include single quotes in texts without using the escape character

let message = "John's employees went home early"
console.log(message);
message = 'John\'s  went home warly';


//Numbers
// integers

let headCount = 26;
console.log(headCount);

// decimal or furaction
let grade = 98.7;
console.log(grade);

// exponentential 
let distance = 2e10;
console.log(distance);


// Combine text and numbers;
let message3 = "John's grade last quarter is " + grade;
console.log(message3);

// booleans data type
// Boolean values are normally used to store values relating to the state of certain things
// This will be useful in further discussions about creating logic to make our application respond to certain scenarios

let isMarried = false
let isGoodConduct = true;

console.log("isMarried"  + isMarried);
console.log("isGoodConduct" + isGoodConduct);

// array data type
// Arrays are a special kind of data type that's used to store multiple values
// Arrays can store different data types but is normally used to store similar data types

/*syntax
	let/constant arrayName = [elementA, elementB, elementC];
*/
let grades = [98.7,92.1, 90.2, 94.0];
console.log(grades);

let random = ['John', 'Smith', 32, true];
console.log(random);

// objects
// Objects are another special kind of data type that's used to mimic real world objects/items
// They're used to create complex data that contains pieces of information that are relevant to each other
// Every individual piece of information is called a property of the object

/*
	syntax:
	let/const objectName = {
		propertyA: value,
		propertyB: value,
	}

*/

let person = {
	firstName: "John",
	lastName: "Smith",
	age: 32,
	isMarried: true
}
console.log(person);
 

 // type of operator; para malamang kung ano datatype na ginamit
// Array is a special type of object with methods and functions to manipulate it.
console.log(typeof person);
console.log(typeof grades);

/*
	Constant Objects and Arrays
		The keyword const is a little misleading.

		It does not define a constant value. It defines a constant reference to a value.

		Because of this you can NOT:

		Reassign a constant value
		Reassign a constant array
		Reassign a constant object

		But you CAN:

		Change the elements of constant array
		Change the properties of constant object
*/

const anime = ['one piece', 'one punch man', 'attacj on titan'];

console.log(anime);

anime[0] = 'kimetsu no yaiba';
console.log(anime);
//We can change the element of an array assigned to a constant variable.
//We can also change the object's properties assigned to a constant variable.



// NULL
// It is used to intentionally express the absence of a value in a variable declaration/initialization
// null simply means that a data type was assigned to a variable but it does not hold any value/amount or is nullified
let spouse = null;
// Using null compared to a 0 value and an empty string is much better for readability purposes
// null is also considered as a data type of it's own compared to 0 which is a data type of a number and single quotes which are a data type of a string
let myNumber = 0;
let myString = '';

		// Undefined
		// Represents the state of a variable that has been declared but without an assigned value
let fullName;
console.log(fullName);
// Undefined vs Null
		// One clear difference between undefined and null is that for undefined, a variable was created but was not provided a value
		// null means that a variable was created and was assigned a value that does not hold any value/amount
		// Certain processes in programming would often return a "null" value when certain tasks results to nothing
let varA = null;
console.log(varA);
// For undefined, this is normally caused by developers creating variables that have no value/data associated with them
		// This is when the value of a variable is still unknown
let varB;
console.log(varB);







