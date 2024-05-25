//This one was a little challenging but completing it gave me huge relief, although I hate using nested for loops

//You are given a binary string (a string consisting of only '1' and '0'). The only operation that can be performed on it is a Flip operation.
//It flips any binary character ( '0' to '1' and vice versa) and all characters to the right of it.
//For example, applying the Flip operation to the 4th character of string "1001010" produces the "1000101" string, since all characters from the 4th to the 7th are flipped.
//Your task is to find the minimum number of flips required to convert the binary string to string consisting of all '0'.

function binStr(s) {
    //create an empty array to store each number, since strings are immutable
    const charList = [];
    //enter all characters to array
    for (const element of s) {
      charList.push(element);
    }
    //initalize counter
    let counter = 0;
    //store length of array
    const length = charList.length;
    //loop through array
    for (let i = 0; i < length; i++) {
      //If element is 0, then go to next iteration
      if (charList[i] == '0') continue;
      //otherwise add to counter
      counter++;
      //then iterate through all other elements
      for (let ii = i; ii < length; ii++) {
        //if other elements are 0 then swap to 1
        if (charList[ii] == '0') {
          charList[ii] = 1;
        } else { //if other elements are 1 then swap to 0
          charList[ii] = 0;
        }
      }
    }
    //return amount of round swaps
    return counter;
  }

binStr('10000');

// 010101
// 001010
// 000101
// 000010
// 000001
// 000000