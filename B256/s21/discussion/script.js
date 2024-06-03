console.log("Happy thursday");

// an array in programming is list of data.

let studentNumberA = "2023-1923";
let studentNumberB = "2023-1923";
let studentNumberC = "2023-1923";
let studentNumberD = "2023-1923";

// with an array, we can simply write this like this.

let studentNumber = ['2023-1923','2023-1924','2023-1925','2023-1926','2023-1927'];

//section array-------
/*
    - Arrays are used to store multiple related values in a single variable
    - They are declared using square brackets ([]) also known as "Array Literals"
    - Commonly used to store numerous amounts of data to manipulate in order to perform a number of tasks
    - Arrays also provide access to a number of functions/methods that help in achieving this
    - A method is another term for functions associated with an object and is used to execute statements that are relevant to a specific ob
- Syntax
        let/const arrayName = [elementA, elementB, ElementC...]
*/

// common examples of arrays

let grades = [98.5,94.3,89.2,90.1];
let computerBrands = ['acer','asus','lenovo','neo','redfox','gateway','toshiba','fujitsu']

// possible use of array but is not recommended
let mixedArr = [12,'asus',null,undefined,{}];

console.log(grades);
console.log(computerBrands);
console.log(mixedArr);

// alternative ways to write arrays
let myTasks = [
		'drink html',
		'eat javascript',
		'inhale css',
		'bake saas'
];

console.log(myTasks);

// create an array with values form variables
let city1 = 'tokyo';
let city2 = 'manila';
let city3 = 'jakarta';

let cities = [city1,city2,city3];
console.log(cities);

// [section] length property
//The .length property allows us to get and set the total number of items in an array.

console.log(myTasks.length);
console.log(cities.length);

let blankArr = [];
console.log(blankArr.length);

// length peorper can also set the total number of items in array,
// meaning we can delete itens or delete the last items and shoretn the arra

myTasks.length = myTasks.length - 1;
console.log(myTasks.length);
console.log(myTasks);

// another xample is using decrementation
cities.length--;
console.log(cities.length);
console.log(cities);

// we can also lengtheni by adding a number into the length property
let theBeatles = ['john','paul','ringo','george'];
theBeatles.length++;
console.log(theBeatles);

// section reading array ----
/*
    - Accessing array elements is one of the more common tasks that we do with an array
    - This can be done through the use of array indexes
    - Each element in an array is associated with it's own index/number
    - In JavaScript, the first element is associated with the number 0 and increasing this number by 1 for every element
    - The reason an array starts with 0 is due to how the language is designed
    - Array indexes actually refer to an address/location in the device's memory and how the information is stored
    - Example array location in memory
        Array address: 0x7ffe9472bad0
        Array[0] = 0x7ffe9472bad0
        Array[1] = 0x7ffe9472bad4
        Array[2] = 0x7ffe9472bad8
    - In the example above, the first element and the array itself points to the same memory location and therefore is at 0 elements away from the location of the array itself
- Syntax
        arrayName[index];
*/

console.log(grades[2])
console.log(computerBrands[3]);
// accessing an array elemet or item that does not exist will return 'undefined';
console.log(grades[10]);

let lakersLegends = ['kobe','shack','lebron','majic','kareem']
console.log(lakersLegends[1]);
console.log(lakersLegends[3]);

// You can also store or save array items in another variable
let currentLaker = lakersLegends[2];
console.log(currentLaker);

// you can also reaasign array values using the items indices.
console.log("Array befire reassisgnment");
console.log(lakersLegends);
lakersLegends[2] = "pau gasol";
console.log("array after reassignment")
console.log(lakersLegends);

// accesing the last item in the array
// Since the first element of an array starts at 0, subtracting 1 to the length of an array will offset the value by one allowing us to get the last element.
let lastIndexElement = lakersLegends.length - 1;
console.log(lakersLegends[lastIndexElement]);

// add it directly 
console.log(lakersLegends[lakersLegends.length -1]);

// adding items into the array
let newArr = [];
console.log(newArr[0]);

newArr[0] = "cloud strife";
console.log(newArr);

newArr[1] = "tifa lockhart";
console.log(newArr);

newArr[newArr.length] = 'barret wallace';
console.log(newArr);

// looping over an array 
//You can use a for loop to iterate over all items in an array.
//Set the counter as the index and set a condition that as long as the current index iterated is less than the length of the array, we will run the condition. It is set this way because the index of an array starts at 0.
for(let index = 0; index <newArr.length; index++) {
	// newArr[0] = tiffani lockhart
	// newArr[1] = cloud strike
	// newArr[3] =barret wallaces
	console.log(newArr[index]);
}
// another way na minus minus
for(let index = newArr.length - 1; index >= 0; index--) {

 	console.log(newArr[index]);
};
// ---------------------------------------
let numArr = [5,12,30,46,40];
for(let index = 0; index < numArr.length; index++) {
	if (numArr[index] % 5 === 0) {
		console.log(numArr[index] + "is dvisible by 5.");
	}else {
		console.log(numArr[index] + "is not dvisible by 5.");
	}
}
// multi dimentional array ---------
/*
    - Multidimensional arrays are useful for storing complex data structures
    - A practical application of this is to help visualize/create real world objects
    - Though useful in a number of cases, creating complex array structures is not always recommended.
*/
let chessBoard = [
	// 0    1      2     3     4     5     6    7
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'], //0
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'], //1
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'], //2
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'], //3
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'], //4
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'], //5
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'], //6
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'] //7
];

console.log(chessBoard);
// Accessing elements of a multidimensional arrays
console.log(chessBoard[1][4]);

console.log("Pawn moves to: " + chessBoard[1][5]);