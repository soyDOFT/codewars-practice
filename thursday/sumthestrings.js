//This one was a fun exercise on type casting and conversions

//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a, b) {
    //if a is an empty strings then change its value to 0, otherwise do nothing
    a === "" ? a = 0 : 0;
    //if a is an empty strings then change their value to 0, otherwise do nothing
    b === "" ? b = 0 : 0;
    //returns the sum of a and b, making sure to type cast, in a string
    return `${Number.parseInt(a) + Number.parseInt(b)}`;
}

console.log(sumStr("5", "2"));