// Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2){
    //checks which operation was passed on
    if (operation === '+') return value1 + value2; // returns sum of numbers
    else if (operation === '-') return value1 - value2; // returns difference of numbers
    else if (operation === '*') return value1 * value2; // returns product of numbers
    else if (operation === '/') return value1 / value2; // returns quotient of numbers
    return 0; //returns 0 by default
  }

  console.log(basicOp('*', 3, 6));