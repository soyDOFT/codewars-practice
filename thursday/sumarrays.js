//This one took more than expected, reduce() works very differently than what I'm used to, but at least I learned.

// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.
function sum (numbers) {
    // return 0 if empty array, otherwise use reduce to add all elements and return result   
    return numbers.length === 0 ? 0 : numbers.reduce((accumulator, number) => accumulator + number);
}

console.log(sum([1, 5.2, 4, 0, -1]));