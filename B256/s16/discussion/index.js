// console.log("hello thursday");

// arithmetic opertaors

let x = 1397;
let y = 7831;

let sum = x + y;
console.log("Result of addition operator: " + sum);

let difference = x - y;
console.log("Result of substratcion operaot" + difference);

let product = x * y;
console.log("Result of product operaot" + product);

let quotient = x / y;
console.log("Result of quotient operaot" + quotient);

let modulo = x % y;
console.log("Result of modulo operaot" + modulo);



// Assignement operators (=)
// The assignment operator adds the value of the right operand to a variable and assigns the result to the variable
let assignmentNumber = 8;

// Addition Assignment operators (+=)
assignmentNumber = assignmentNumber + 2;
console.log('Result of addiiton assignment operator is:' + assignmentNumber);

// shorthand for assignement operators
assignmentNumber += 2;
console.log('Result of addiiton assignment operator is:' + assignmentNumber);

assignmentNumber -= 2;
console.log('Result of substraction assignment operator is:' + assignmentNumber);

assignmentNumber *= 2;
console.log('Result of multiplication assignment operator is:' + assignmentNumber);

assignmentNumber /= 2;
console.log('Result of division assignment operator is:' + assignmentNumber);

// multipl operators and parenthesus
// When multiple operators are applied in a single statement, it follows the PEMDAS (Parenthesis, Exponents, Multiplication, Division, Addition and Subtraction) rule
let mdas = 1 + 2 -3 * 4 / 5;
console.log("result of mdas operations: " + mdas);

// The order of operations can be changed by adding parenthesi to the logi
let pemdas = 1 + (2 -3) * (4/5);
console.log("result of pemdas operations: " + pemdas);

// increment adn decrement operators
// Operators that add or subtract values by 1 and reassigns the value of the variable where the increment/decrement was applied to

let z = 3;
let increment = ++z;
console.log("result of pre-increment" + increment);
console.log("result of pre-increment" + z);

increment = z++;
console.log("result of post-increment" + increment);
console.log("result of post-increment" + z);

// decrement
let decrement = --z;
console.log("result of pre-decrement" + decrement);
console.log("result of pre-decrement" + z);

// The value of "z" is returned and stored in the variable "decrement" then the value of "z" is decreased by one
decrement = z--;
console.log("result of post-decrement" + decrement);
console.log("result of post-decrement" + z);

// type coercion
/*
    - Type coercion is the automatic or implicit conversion of values from one data type to another
    - This happens when operations are performed on different data types that would normally not be possible and yield irregular results
    - Values are automatically converted from one data type to another in order to resolve operations
*/

let num1 = '10'; //numbe to string
let num2 = 12;
/* 
    - Adding/concatenating a string and a number will result is a string
    - This can be proven in the console by looking at the color of the text displayed
    - Black text means that the output returned is a string data type
*/

let coursion = num1 + num2;
console.log(coursion);
console.log(typeof coursion);

// non coursion. number to number
let num3 = 16;
let num4 = 14;
/* 
    - The result is a number
    - This can be proven in the console by looking at the color of the text displayed
    - Blue text means that the output returned is a number data type
*/

let noncoercion = num3 + num4;
console.log(noncoercion);
console.log(typeof noncoercion);

// 
let num5 = true + 5;
console.log(num5);

let num6 = false + 1;
console.log(num6);

// comparision operator ---------------------------
let juan = "juan"
// equality operator
// checks wheter two operarand are equal / have the same content
console.log(1 == 1);
console.log(1 == 2);
console.log(1 == '1');
console.log(0 == false);
console.log('juan' == 'juan');
console.log('juan' == juan);

// Inequality operators (!=)
// check whether the two operands are unequal
console.log(1 != 1);
console.log(1 != 2);
console.log(1 != '1');
console.log(0 != false);
console.log('juan' != 'juan');
console.log('juan' != juan);

// strict equality (===)
// check wheter the two operands are equal or have the same content and data type.

console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log(0 === false);
console.log('juan' === 'juan');
console.log('juan' === juan);

// stric inequality (!==)
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== '1');
console.log(0 !== false);
console.log('juan' !== 'juan');
console.log('juan' !== juan);

// relational operator -----------------

let a = 50;
let b = 65;

let isGreaterThan = a > b;
let isLessThan = a < b;
let isGTOrEqual = a >= b;
let isLTOrEqual = a <= b;

console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGTOrEqual);
console.log(isLTOrEqual);

let numString = '30';
console.log(a > numString); //forces coercion
console.log(a <= numString);

let str = "twenty";
console.log(b >= str);

// logical operator -----------------------
let isLegalAge = true;
let isRegistered = false;

let allRequirements = isLegalAge && isRegistered;
console.log("Result of logial And operator: "+ allRequirements);

let someRequirements = isLegalAge || isRegistered;
console.log("Result of logial OR operator: "+ someRequirements);

let someRequiremnetsNotMet = !isRegistered;
console.log("Result of logial Not operator: "+ someRequiremnetsNotMet);
