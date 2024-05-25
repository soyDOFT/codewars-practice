//Not too difficult, but made me more familar with operators.

//function that finds all powers of 2 upto a number n
function powersOfTwo(n) {
    //initialize empty array to store powers of 2
    const list = [];
    //loop until n is met
    for (let i = 0; i <= n; i++) {
        //store the power of 2 in array
        list.push(2 ** i);
    }
    //send back the list of powers of 2
    return list;
}