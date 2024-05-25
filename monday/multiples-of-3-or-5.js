//One of this first ones I completed, overall wasn't very difficult

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//Additionally, if the number is negative, return 0.
//Note: If the number is a multiple of both 3 and 5, only count it once.

//function to determine if
function solution(number){
  let sum = 0;
  //Loop up to the number input
  for (let i = number - 1; i > 0; i--) {
    //check if current number is multiple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
      //add all numbers
      sum += i;
    }
  }
  // returns result
  return sum;
}

console.log(solution(33));