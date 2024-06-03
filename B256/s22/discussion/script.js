console.log("TGIF");

// Array methods
// Mutator methods
/*
    - Mutator methods are functions that "mutate" or change an array after they're created
    - These methods manipulate the original array performing various tasks such as adding and removing elements
*/

let fruits = ['apple','orange','kiwi','drageon fruit'];

// push () add element
/*
        - Adds an element in the end of an array AND returns the array's length
        - Syntax
            arrayName.push(<element>);
*/
console.log('current Array')
console.log(fruits)
let fruitsLength = fruits.push('mango');
console.log(fruitsLength);
console.log("Mutated Array from push method");
console.log(fruits);

// add multiple elements in an array at the same time
fruits.push('avocado','guava');
console.log('Mutated array from push method:');
console.log(fruits);

// pop() 
/*
        - Removes the last element in an array AND returns the removed element
        - Syntax
            arrayName.pop();
*/
let removeFruit = fruits.pop();
console.log(removeFruit);
console.log('Mutataed array form pop mehod.')
console.log(fruits)

//  unshift()
/*
        - Adds one or more elements at the beginning of an array
        - Syntax
            arrayName.unshift('elementA');
            arrayName.unshift('elementA', elementB);
    */
fruits.unshift('lime','banana')
console.log('mutated array from nshift method');
console.log(fruits);

// shift()
/*
    - Removes an element at the beginning of an array AND returns the removed element
    - Syntax
        arrayName.shift();
*/
let anotherFruit = fruits.shift();
console.log(anotherFruit);
console.log('Mutataed array from the sgift method')
console.log(fruits)

// splice()
/* 
    - Simultaneously removes elements from a specified index number and adds elements
    - Syntax
        arrayName.splice(startingIndex, deleteCount, elementsToBeAdded)
*/

fruits.splice(2,4,'lime','cherry')
console.log('Mutataed array from the splice method')
console.log(fruits)

// sort()
/*
        - Rearranges the array elements in alphanumeric order
        - Syntax
            arrayName.sort();
    */
fruits.sort();
console.log('mutated array from the sort method');
console.log(fruits);

// reverse()
/*
        - Reverses the order of array elements
        - Syntax
            arrayName.reverse();
*/
fruits.reverse();
console.log('mutataed array from reverse method');
console.log(fruits);

// [section] Non-Mutator methods -----------
/*
        - Non-Mutator methods are functions that do not modify or change an array after they're created
        - These methods do not manipulate the original array performing various tasks such as returning elements from an array and combining arrays and printing the output
*/

let countries = ['ph','us','can','sg','th','ph','fr','dn'];

// indexOf()
/*
    - Returns the index number of the first matching element found in an array
    - If no match was found, the result will be -1.
    - The search process will be done from first element proceeding to the last element
    - Syntax
        arrayName.indexOf(searchValue);
        arrayName.indexOf(searchValue, fromIndex);
*/
let firstIndex = countries.indexOf('ph');
console.log("Result of indexOf method:" + firstIndex);

let invalidIndex = countries.indexOf('br');
console.log("Result of indexOf method:" + invalidIndex);

// lastIndexOf()
/*
    - Returns the index number of the last matching element found in an array
    - The search process will be done from last element proceeding to the first element
    - Syntax
        arrayName.lastIndexOf(searchValue);
        arrayName.lastIndexOf(searchValue, fromIndex);
*/

let lastIndex = countries.lastIndexOf('ph')
console.log('result of lastIndexOf method ' + lastIndex);

//  slice()
/*
    - Portions/slices elements from an array AND returns a new array
    - Syntax
        arrayName.slice(startingIndex);
        arrayName.slice(startingIndex, endingIndex);
*/

let sliceArrayA = countries.slice(2);
console.log("result from slice method" + sliceArrayA);

let sliceArrayB = countries.slice(2,4);
console.log("result from slice method" + sliceArrayB);

let sliceArrayC = countries.slice(-3);
console.log("result from slice method" + sliceArrayC);

// toString()
/*
    - Returns an array as a string separated by commas
    - Syntax
        arrayName.toString();
*/
let stringArray = countries.toString();
console.log('result of toString method' + stringArray);

// concat()
/*
    - Combines two arrays and returns the combined result
    - Syntax
        arrayA.concat(arrayB);
        arrayA.concat(elementA);
*/
let taskArrayA = ['drink HTML', 'eat javascript'];
let taskArrayB = ['inahale CSS', 'breath Saas'];
let taskArrayC = ['get Git', 'be node'];

let tasks = taskArrayA.concat(taskArrayB);
console.log("result from concat medthod");
console.log(tasks);

// combine multiple arrays
let allTasks = taskArrayA.concat(taskArrayB,taskArrayC);
console.log(allTasks);

// combine array with elements
let combineTasks = taskArrayA.concat('smell ecpress', 'throw react');
console.log("result from concat medthod");
console.log(combineTasks);

// join()
/*
    - Returns an array as a string separated by specified separator string
    - Syntax
        arrayName.join('separatorString');
*/

console.log(allTasks.join());
console.log(allTasks.join(' + '));

// [section] Iteration methods
/*
    - Iteration methods are loops designed to perform repetitive tasks on arrays
    - Iteration methods loops over all items in an array.
    - Useful for manipulating array data resulting in complex tasks
    - Array iteration methods normally work with a function supplied as an argument
    - How these function works is by performing tasks that are pre-defined within an array's method.
*/

// forEach()
/*
    - Similar to a for loop that iterates on each array element.
    - For each item in the array, the anonymous function passed in the forEach() method will be run.
    - The anonymous function is able to receive the current item being iterated or loop over by assigning a parameter.
    - Variable names for arrays are normally written in the plural form of the data stored in an array
    - It's common practice to use the singular form of the array content for parameter names used in array lo
    - It's common practice to use the singular form of the array content for parameter names used in array loops
    - forEach() does not return anything.
    - Syntax
        arrayName.forEach(function(indivElement) {
            statement
        })
*/

// 
allTasks.forEach(function(task) {
	console.log(task);
});

let filteredTasks = [];

allTasks.forEach(function(task) {
	if(task.length > 10) {
		filteredTasks.push(task)
	}
})

console.log('result of filteredTasks: ');
console.log(filteredTasks);

// map()
/* 
    - Iterates on each element AND returns new array with different values depending on the result of the function's operation
    - This is useful for performing tasks where mutating/changing the elements are required
    - Unlike the forEach method, the map method requires the use of a "return" statement in order to create another array with the performed operation
    - Syntax
        let/const resultArray = arrayName.map(function(indivElement))
*/

let taskMap = allTasks.map(function(task){
	if (task.length > 10) {
		task = 'hello world';
	}
	return task;
})

console.log(taskMap);
// another example map
let numbers = [1, 2, 3, 4, 5];

let numberMap = numbers.map(function(number) {
    return number * number;
});

console.log("Original Array:");
console.log(numbers);
console.log("Result of map method:");
console.log(numberMap);

/*
        - Checks if all elements in an array meet the given condition
        - This is useful for validating data stored in arrays especially when dealing with large amounts of data
        - Returns a true value if all elements meet the condition and false if otherwise
        - Syntax
            let/const resultArray = arrayName.every(function(indivElement) {
                return expression/condition;
            })
    */

let allValid = numbers.every(function(number) {
    return (number < 3);
});
console.log("Result of every method:");
console.log(allValid);

// some()
/*
    - Checks if at least one element in the array meets the given condition
    - Returns a true value if at least one element meets the condition and false if otherwise
    - Syntax
        let/const resultArray = arrayName.some(function(indivElement) {
            return expression/condition;
        })
*/
let someValid = numbers.some(function(number) {
        return (number < 1);
    });
    console.log("Result of some method:");
    console.log(someValid);

    // Combining the returned result from the every/some method may be used in other statements to perform consecutive results
    if (someValid) {
        console.log('Some numbers in the array are greater than 2');
    };

// filter()
/*
        - Returns new array that contains elements which meets the given condition
        - Returns an empty array if no elements were found
        - Useful for filtering array elements with a given condition and shortens the syntax compared to using other array iteration methods
        - Mastery of loops can help us work effectively by reducing the amount of code we use
        - Several array iteration methods may be used to perform the same result
- Syntax
        let/const resultArray = arrayName.filter(function(indivElement) {
            return expression/condition;
        })
*/

let filterValid = numbers.filter(function(num) {
	return (num < 3);

})
console.log('result of filyer method');
console.log(filterValid);

// no elements are found
let nothingFound = numbers.filter(function(num) {
	return (num === 0);
});
console.log('result of filter method');
console.log(nothingFound);

// includes()
/*
    - includes() method checks if the argument passed can be found in the array.
    - it returns a boolean which can be saved in a variable.
        - returns true if the argument is found in the array.
        - returns false if it is not.
    - Syntax:
        arrayName.includes(<argumentToFind>)
*/

let number1 = numbers.includes(4);
console.log(number1);

let number2 = numbers.includes(8);
console.log(number2);

let products = ['mouse','keyboard','laptop','monitor'];

let filteredProducts = products.filter(function(prod){
	return prod.toLowerCase().includes('m');
})
console.log(filteredProducts);

// reduce()
/* 
    - Evaluates elements from left to right and returns/reduces the array into a single value
    - Syntax
        let/const resultArray = arrayName.reduce(function(accumulator, currentValue) {
            return expression/operation
        })
    - The "accumulator" parameter in the function stores the result for every iteration of the loop
    - The "currentValue" is the current/next element in the array that is evaluated in each iteration of the loop
    - How the "reduce" method works
1. The first/result element in the array is stored in the "accumulator" parameter
        2. The second/next element in the array is stored in the "currentValue" parameter
        3. An operation is performed on the two elements
        4. The loop repeats step 1-3 until all elements have been worked on
*/   
 let iteration = 0;

 let reducedArray = numbers.reduce(function(x,y){
 	console.warn('current iteration: ' + ++iteration);
 	console.log('acccumolator: '+ x);
 	console.log('currentValue:' + y);
 	return x + y;
 });
 // [1, 2, 3, 4, 5];

// 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 1
console.log('result of reduce method: '+ reducedArray);
// /another example string

let list = ['thank','g','its','friday'];

let reducedList = list.reduce(function(x,y) {
	return x + ' ' + y;
})

console.log("result of the reduce method" + reducedList);

// ["Thank", "G", "Its", "Friday"];

// Thank + " " + G = Thank G + " " + Its = Thank G Its + " " + Friday = Thank G Its Friday
