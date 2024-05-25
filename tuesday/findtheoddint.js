//This one was a good challenge, though probably needs refactoring

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
function findOdd(A) {
    //change the order of the array to ascending order
    A.sort();
    //keep count of the same number
    let counter = 1;
    //set result to the first element in the array
    let result = A[0];
    //loop through the array
    for (let i = 1; i < A.length; i++) {
        //check if next iteration is the same number as previous
        if (result === A[i]) {
            //if it is the same, then increment counter
            counter++;
            //otherwise if next iteration is a different number
        } else {
            // check if the counter is odd number
            if (counter % 2 !== 0) {
                // if true then return the answer
                return result;
            }
            // otherwise set new number to be the result we are checking and reset counter
            result = A[i];
            counter = 1;
        }
    }
    // return last result by default
    return result;
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //returns 4 since it occurs one time, which is odd