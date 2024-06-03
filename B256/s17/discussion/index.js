// console.log("tgif");

// sections functions -------------------
// Functions in javascript are lines/blocks of codes that tell our device/application to perform a certain task when called/invoked
	// Functions are mostly created to create complicated tasks to run several lines of code in succession
	// They are also used to prevent repeating lines/blocks of codes that perform the same task/function

	//Sections functions declaraion-------

/*
	syntax:
		function functionName() {
			codeblock(statement)
		}

*/

// function keyword - used to defined a javascript functions
	// functionName - the function name. Functions are named to be able to use later in the code.
	// function block ({}) - the statements which comprise the body of the function. This is where the code to be executed.
	// function statement - defines a function with the specified parameters.

function printName() {
	console.log("My name is john");
}
// function invocation
//The code block and statements inside a function is not immediately executed when the function is defined. The code block and statements inside a function is executed when the function is invoked or called.
	//It is common to use the term "call a function" instead of "invoke a function".
printName();

// undeclaredFunction(); -> result in error not defined.

// SECTION fnction declaration vs function expression-------

	//function declaration
		//function declared can bse hoisted.
declaredFunction();

function declaredFunction() {
	console.log("Hello form the other side");
}

declaredFunction();

// function expression 
	//function are stored in a variable
//function are callled anonymous function
// // variableFunctions
// variableFunction();

let variableFunction = function() {
	console.log("Hello its me!");
};
// function with name Function
variableFunction();
// function name cannot be used to call a function expression.
let funcExpression = function funcName() {
	console.log("Hi hello Hi")
}
funcExpression();
// You can reassign declared functions and function expressions to new anonymous functions.

declaredFunction = function() {
	console.log("Updated Content: Hello Hello");
};
declaredFunction();

// However, we cannot re-assign a function expression initialized with const.

	// funcExpression = function funcName() {
	// 	console.log("I am a different Content")
	// }

	// // funcExpression();

// Function scoping --------------------
/*	
	Scope is the accessibility (visibility) of variables within our program.
	
	Javascript Variables has 3 types of scope:
		1. local/block scope
		2. global scope
		3. function scope
*/

let globalVar = "Smith";
{
	// local scope
	let localVar = "John Smith";
	console.log(globalVar);
	console.log(localVar);
}

console.log(globalVar);
// console.log(localVar); not defineds

// function scope
/*		
		JavaScript has function scope: Each function creates a new scope.
		Variables defined inside a function are not accessible (visible) from outside the function.
		Variables declared with var, let and const are quite similar when declared inside a function.
	*/
let globalName = "Juan"

function showNames(){
	var functionVar = "Iron Man";
	const funtionConst = 'Spiderman';
	let functionLet = "Hulk";

	console.log(functionVar);
	console.log(funtionConst);
	console.log(functionLet);
	console.log(globalName);
}
showNames();
	// console.log(functionVar);
	// console.log(funtionConst);
	// console.log(functionLet);

// nested function
function parentFunction() {
	let parentName = "robert";
	function nestedFunction() {
		let nestedName = "Nestle";
		console.log(parentName);
	}
	// console.log(parentName);
	nestedFunction();
}
parentFunction();
// nestedFunction();return an error

// section alert ------------------
//alert() allows us to show a small window at the top of our browser page to show information to our users. As opposed to a console.log() which only shows the message on the console. It allows us to show a short dialog or instruction to our user. The page will wait until the user dismisses the dialog.
/*
syntax
	alert("alertMessage");

*/
alert("I am an alert box!"); //it will automatically run when the page reload.
// You can use an alert() to show a message to the user from a later function invocation.
function showSampleAlert() {
	alert("hello user")
		
}

showSampleAlert();	
//You will find that the page waits for the user to dismiss the dialog before proceeding. You can witness this by reloading the page while the console is open.
console.log("I will only log in the console when the alert is dismiss");

// Section using prompt-----------------
	// prompt() allows us to show a small window at the top of the browser to gather user input. It, much like alert(), will have the page wait until the user completes or enters their input. The input from the prompt() will be returned as a String once the user dismisses the window.

let samplePrompt = prompt("Enter your name:");

// console.log("hello" + samplePrompt);prompt stores the user input in the variable sample and siplays it on the console.

let samepleNullPrompt = prompt("Dont enter anything here");
console.log(samepleNullPrompt); //prompt stores and empty string and display it on the console.

function welcomeMessage() {
	let firstName = prompt("Enter your first name");
	let lastName = prompt("Enter your last name");

	console.log("hello" + firstName + " "+ lastName)
	console.log("Welcome to my page");
}

welcomeMessage();

//Function Naming Conventions -----------------
	//Function names should be definitive of the task it will perform. It usually contains a verb.

		function getCourses(){

			let courses = ["Science 101","Math 101","English 101"];
			console.log(courses); 

		};

		getCourses();

	//Avoid generic names to avoid confusion within your code.

		function get(){

			let name = "Jamie";
			console.log(name);

		};

		get();

	//Avoid pointless and inappropriate function names.

		function foo(){

			console.log(25%5);

		};

		foo();

	//Name your functions in small caps. Follow camelCase when naming variables and functions.

		function displayCarInfo(){

			console.log("Brand: Toyota");
			console.log("Type: Sedan");
			console.log("Price: 1,500,000");

		}
		
		displayCarInfo();
