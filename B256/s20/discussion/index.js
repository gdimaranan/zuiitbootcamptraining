// console.log("hello guys")

/*
    - A while loop takes in an expression/condition
    - Expressions are any unit of code that can be evaluated to a value
    - If the condition evaluates to true, the statements inside the code block will be executed
    - A statement is a command that the programmer gives to the computer
    - A loop will iterate a certain number of times until an expression/condition is met
    - "Iteration" is the term given to the repetition of statements
- Syntax
        while(expression/condition
- Syntax
        while(expression/condition) {
            statement
        }
*/

let count = 5;
// 1st ite = 
// while the value of count is stricky not equal to 0
while (count != 0) {
	// while 5 -- 1st iterations
	// while 4 -- 1st iterations
	// while 3 -- 1st iterations
	// while 2 -- 1st iterations
	// while 1 -- 1st iterations

	console.log("while" +count)
	// count 4
	// count 3
	// count 2
	// count 1
	// count 0
	count--;
};
/*
    - A do-while loop works a lot like the while loop. But unlike while loops, do-while loops guarantee that the code will be executed at least once.
    - Syntax
        do {
            statement
        } while (expression/condition)
*/

// prompt takes an input as data type "string"
// "number" function works similarly with the 'parseInt' function
let number = Number(prompt("give me a number"));

do {
	// Do while: 4
	// Do while: 5
	// Do while: 6
	// Do while: 7
	// Do while: 8
	// Do while: 9
	console.log("Do while" + number)

	// number = 5
	// number = 6
	// number = 7
	// number = 8
	// number = 9
	// number = 10
	number += 1;
}while(number <10);

/*
    - A for loop is more flexible than while and do-while loops. It consists of three parts:
        1. The "initialization" value that will track the progression of the loop.
        2.  The "expression/condition" that will be evaluated which will determine whether the loop will run one more time.
        3. The "finalExpression" indicates how to advance the loop.
    - Syntax
        for (initialization; expression/condition; finalExpression) {
            statement
        }
*/
// value = 0
// value = 1
// value = 2
// value = 3
// value = 4
// value = 5
// value = 6
// value = 7
// value = 8
for(let value = 0; value<=7; value++) {

	// 0
	// 1
	// 2
	// 3
	// 4
	// 5
	// 6
	// 7
	console.log(value);
}

// Characters in strings may be counted using the .length property
// Strings are special compared to other data types that it has access to functions and other pieces of information another primitive data type might not have
let string = "wednesday";
console.log(string.length)

// Accessing elements of a string
// Individual characters of a string may be accessed using it's index number
// The first character in a string corresponds to the number 0, the next is 1 up to the nth number

console.log(string[0]);
console.log(string[0]);
console.log(string[0]);

for(let x = 0; x < string.length; x++) {
	console.log(string[x]);
}

let myName = "HILLARY";

for(let i = 0; i < myName.length; i++) {
	// myName[i].toLowerCase();
	// If the character of your name is a vowel letter, instead of displaying the character, display number "3"
    // The ".toLowerCase()" function/method will change the current letter being evaluated in a loop to a lowercase letter ensuring that the letters provided in the expressions below will match
	if (myName[i].toLowerCase() == 'a' || myName[i].toLowerCase == 'e'||
		myName[i].toLowerCase == 'o' || myName[i].toLowerCase == 'u' ) {
		console.log(3);
	}
	else {
		console.log(myName[i])
	}
}

// [section] continue and break statements
/*
    - The "continue" statement allows the code to go to the next iteration of the loop without finishing the execution of all statements in a code block
    - The "break" statement is used to terminate the current loop once a match has been found
*/

for (let num = 0; num <= 20; num++) {
	if (num % 2 === 0) {
		continue;
	}
	if (num > 10) {
		break;
	}
	console.log("continue and break" + num);
}
// ------------------------
let name = "alexandro";

for (let i = 0; i < name.length; i++) {
    
    // The current letter is printed out based on it's index
    console.log(name[i]);

    // If the vowel is equal to a, continue to the next iteration of the loop
    if (name[i].toLowerCase() === "a") {
        console.log("Continue to the next iteration");
        continue;
    }

    // If the current letter is equal to d, stop the loop
    if (name[i] == "d") {
        break;
    }

}