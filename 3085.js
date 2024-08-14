// Part 1: Thinking Functionally
/* Take an array of numbers and return the sum.
Take an array of numbers and return the average.
Take an array of strings and return the longest string.
Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
Take a number, n, and print every number between 1 and n without using loops. Use recursion. */

//Take an array of numbers and return the sum.
// let numArray = [ 8, 10 , 12 , 15];
function sumArray(arr) {  // create an array
    let sum = 0  // set my starting sum at 0
    for (let i = 0; i < arr.length; i++) { // sum will start at zero and each item in the array will add to it
        sum += arr[i];
    }
    return sum;// once u add every item in the array u will have the sum
}


let numbers = [8, 10, 12, 15];
let result = sumArray(numbers); // with set numbers about the will be used to show he sum 

console.log(result); // output 45 the total of the array

// Take an array of numbers and return the average.

// starting code didnt work trying arrow 
// const calAve = function (array) { 
//     let sum = 0; 

//     for (let i = 0; i < array.length; i++)  
//     sum += array[i]; 

//     const average = sum / array.length; 

//     console.log(average); 

//     return average; 
//     }; 

//     let array = [10,20,30,40];
//     let average = 
//     console.log(calAve);

// I couldn't figure out where to imbed the array in the above code to get to log the average, however the arrow function is a bit easier for a non-dynamic average
// the constant average will calculate by using "reduce so "
const average = array => array.reduce((a, b) => a + b) / array.length; // reduce will call back to each element in the array and return the previous calculation until its run all the way across
console.log((`The average is `) + average([8, 10, 12, 15])); // final output The average is 11 .25

//Take an array of strings and return the longest string.
// Once again going used  to use reduce it will just compare 2 words saved the longest one and go down the list 
const getLongestString = (arr) => arr.reduce(
    (savedString, string) => (string.length > savedString.length ? string : savedString),
    '',
);

console.log(getLongestString(['fox', 'elephant', 'chicken', 'lion', 'sheep'])) // Output elephant

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//  Tried re-using my longest string function to get array to reduce against the number...didn't work
//   const stringsLongerThan = (arr) => arr.reduce(
//     (savedString, string) => (string.length > savedString.length ? string : savedString),
//     '',
//     );

//     console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
// Defining the the array and number before function to get the desired output
let words = ['say', 'hello', 'in', 'the', 'morning', 'tuseday']; // using the words from example given and one extra for testing purpuse
let n = 3 // using example number
let longerWords = words.filter(function (str) { return str.length > n; }); // using array.filter
if (longerWords.length == 0) {  // using array length with filter to sort and compare words to number
    console.log("You have no words longer than the number " + n + ".");
};
console.log(longerWords); // output [ 'hello', 'morning', 'tuesday' ] 

// Take a number, n, and print every number between 1 and n without using loops.
//  Going to be using recursion because that was the hint given 

function printNos(z) //Prints numbers from 1 to n
{
    if (z > 0) {
        printNos(z - 1);
        console.log(z + " "); // recursion function will call on itself
    }
    return;
}

let z = 15;
printNos(z); // 1, 2 ,3 ... all the way to 15