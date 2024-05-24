//Given a number n, return the number of positive odd numbers below n

function oddCount(n){
    // Start counter
    let counter = 0;
    //Start at 1 then increment counter every 2 numbers until n is reached
    for (let i = 1; i < n; i += 2) {
        counter++;
    }
    //send back final counter
    return counter;
  }

  console.log(oddCount(15));