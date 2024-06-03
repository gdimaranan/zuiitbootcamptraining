// console.log("hello")

//What are conditional statements?

//Conditional statements allow us to control the flow of our program. It allows us to run a statement/instruction if a condition is met or run another separate instruction if otherwise.

// if else if and else statement ----------

let numA = -1;

// if statenent
//execute a statement if a specific condition is true
// it will not run because the condition result to false
if(numA > 0) {
	console.log("numA is GREATER Than 0"); //f
}

console.log(numA > 0);
// it will run because the contion to true
if (numA < 0) {
	console.log("numA is less than 0"); //t
}
console.log(numA < 0);

// else if clause
/* 
    - Executes a statement if previous conditions are false and if the specified condition is true
    - The "else if" clause is optional and can be added to capture additional conditions to change the flow of a program

*/
let numB = 1;

if (numB < 0) {
	console.log("numB is less than 0");
}
else if (numB > 0) {
	console.log("numB is greater than 0");
}

let city = "tokyo";

if (city === "New York") {
	console.log("Welcome to new york city")
}
else if (city === "tokyo") {
	console.log("Welcome to tokyo")
}

// else statement--no parameter
/* 
    - Executes a statement if all other conditions are false
    - The "else" statement is optional and can be added to capture any other result to change the flow of a program
*/

let numC = 0;

if (numC > 0) {
	console.log("hello");
}else if (numC < 0) {
	console.log("hello world")
}else {
	console.log("again")
}
// we cannot create a conditional ststement without preciding if() statement

let greeting = "hola"

if (greeting === "Mabuhay") {
	console.log("Mabuhay")
}
else if (greeting === "hola") {
	console.log("hola")
}else if (greeting === "konnichiwa") {
	console.log("konnichiwa")
}else {
	console.log("hello")
}

// if else if statement with function
/*
    - Most of the times we would like to use if, else if and else statements with functions to control the flow of our application
    - By including them inside functions, we can decide when certain conditions will be checked instead of executing statements when the JavaScript loads
    - The "return" statement can be utilized with conditional statements in combination with functions to change values to be used for other features of our application
*/

 let message = "No message"

console.log(message);

function determinTypoonIntensity(windSpeed) {
	if (windSpeed < 30) {
		return "Not a typoon yet"
	}
	else if (windSpeed <= 61) {
		return "Tropical depression detected"
	}
	else if (windSpeed >= 62 && windSpeed <= 88) {
		return "Tropical storm"
	}
	else if (windSpeed >= 89 || windSpeed <= 117) {
		return "severe tropical storm detected"
	}else {
		return "typoon detected"
	}
}
// return the strin to the variable "message"
message = determinTypoonIntensity(110);
console.log(message);

/* 
    - We can further control the flow of our program based on conditions and changing variables and results
    - The initial value of "message" was "No message."
    - Due to the conditional statements created in the function, we were able to reassign it's value and use it's new value to print a different output
    - console.warn() is a good way to print warnings in our console that could help us developers act on certain output within our code
*/
if(message == "severe tropical storm detected") {
	console.warn(message)
}

// truthy and falsy-------------
/*
In javascript a 'truth' value is a value that is cosidered true when encuntered in boolean contaxt.
-values are considered true unless dedined otherwisw.
-falsy value/exceptions for truth:
	1. false
	2.0
	3. -0
	4. ""
	5. null
	6. undefined
	7. NaN 
*/

// truthy examples
/*
	-if the result of an expression in a condition reuslts to a truth valye, the condition return true and the 
		corrsponding statement are execute.
	-expression are any unit of code that can be evaluated to a value.

*/
if (true) {
	console.log("truthy");
}
if (1) {
	console.log("truthy");
}
if ([]) {
	console.log("truthy");
}

// falsy examples
if (false) {
	console.log("falsy");
}
if (0) {
	console.log("falsy");
}
if (undefined) {
	console.log("falsy");
}

// section conditional (ternary) operator
/*
	-the condiional (ternary) operator takes in 3 operadns
	1. condition
	2. expression to execute if the condition is truthy
	3. expression to execite if the condition is falsy
	-can be used as an alternative to an 'if else' statement
	-ternary operators have an implicit 
	-'return' statement meanng that withotu the 'return' keyword, the
	rezulting expression can be stored ivariable.
	-commonly used for a single statement expression where the result consisit of
	only one lune of code.
	-for multipl lines of code/blocks a function may be defined
		then used in a ternanry operators
		-syntax:
		(expression) ? ifTrue : ifFalse;

*/
// single statement execution
let ternaryResult = (1 < 18) ? true : false;
console.log("result of ternary operator" + ternaryResult);

// multiple statement execution

let name;

function isOfLegalAge() {
	name = 'Jungkook';
	return 'Your are of a leagl age limit';
}
function isUnderAge() {
	name = 'Jane';
	return 'Your are under the age limit';
}

isOfLegalAge();
isOfLegalAge();

/*

-the prompt function createa a pop-up message in the browser
*/
// -inpur recieved form the prompt function is returned as string data type
// -the 'parseInt' dunction converts the onput recieved into a number data type
// pressing on the 'cance,' button on prompt will return a value of null

let age = parseInt(prompt("what is your age?"));
console.log(age);

let legalAge = (age > 18) ? isOfLegalAge(): isUnderAge();
console.log("result of ternary operator in function" + legalAge+name);


// section switch statement --------------
/*
	-the switch statement evaluates an expression and matches
	the expressions value to a case clause. the switch will
	exceute the stsatements with that case, as well as statements in cases that follow the matching case.

	-can be used as an alternative to an if, 'else if and else' statement
	where the data to be used in the condition in of anexprected output.
	-sytax:
	switch (expression) {
		case value:
			statement;
			break;
		default:
			statement;
			break;
	}
	-expression is the informaton used to matced the 'value'
	 provided in the switch cases.
	 -variable are commonly used as expression to allow varring iser input to be used when comparing switch case values.
		-break statement is used to terminate the current loop once a match has been found
	-
*/
// toLowerCase function/method will chane the input recieved from prompt into all lowercase letter.
day = prompt("what day of the week is it today?").toLowerCase();
console.log(day);

switch (day) {
case 'Monday':
	console.log("The color of the day is red.");
	break;
case 'Tuesday': 
	console.log("The color of the day is orange.");
	break;
case 'Wednesday': 
	console.log("The color of the day is yellow.");
	break;
case 'Thursday': 
	console.log("The color of the day is green.");
	break;
case 'Friday': 
	console.log("The color of the day is blue.");
	break;
default:
	console.log("Please input a valid date");
	break;
}

// Try-catch finally statement ----------------
/*
	- 'Try catach ' statement are commonly used  for error handling
	- there are instance when the application returns an error/warning
	that is not necessarily an erro in the contetxt of our code
	-these ate error are a result of an attempt of the programming language to help devloper in 
	creating efficient code.
	-they are used to specify a response whenever an exception /error is recieved.


*/
function showIntensityAlert(windSpeed) {
	try {
		alert(determinTypoonIntensity(windSpeed));
	// error/err are commonly used variable names use by the
		// developer for storing errors
	}catch(err){
		// typeof operator is used to check the data type of a value/expression and returns a string value or what the data type is
		console.log(typeof err);
		// catch error within 'try' statement
		// in tis case the error is an unknown function 'alerat' which does not exist in javascript
		// alert functuon is used similarly to a prompy to alert the user
		// err.messga eis used to access the informtaion relating to an error objecr
		console.warn(err.message);
	} finally {
		alert("Intensity update will show new alert.")
	}
}
showIntensityAlert(56);