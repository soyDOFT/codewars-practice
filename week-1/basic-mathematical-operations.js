function basicOp(operation, value1, value2){
    //checks which operation was passed on
    if (operation === '+') return value1 + value2; // returns sum of numbers
    else if (operation === '-') return value1 - value2; // returns difference of numbers
    else if (operation === '*') return value1 * value2; // returns product of numbers
    else if (operation === '/') return value1 / value2; // returns quotient of numbers
    return 0; //returns 0 by default
  }

  console.log(basicOp('*', 3, 6));