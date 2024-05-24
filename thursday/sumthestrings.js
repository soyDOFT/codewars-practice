function sumStr(a, b) {
    //if a is an empty strings then change its value to 0, otherwise do nothing
    a === "" ? a = 0 : 0;
    //if a is an empty strings then change their value to 0, otherwise do nothing
    b === "" ? b = 0 : 0;
    //returns the sum of a and b, making sure to type cast, in a string
    return `${Number.parseInt(a) + Number.parseInt(b)}`;
}

console.log(sumStr("5", "2"));