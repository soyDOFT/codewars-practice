function binStr(s) {
    //create an empty array
    const charList = [];
    //enter characters to array
    for (const element of s) {
      charList.push(element);
    }
    //initalize counter
    let counter = 0;
    const length = charList.length;
    for (let i = 0; i < length; i++) {
      if (charList[i] == '0') continue;
      counter++;
      for (let ii = i; ii < length; ii++) {
        if (charList[ii] === '0') {
          charList[ii] = 1;
        } else {
          charList[ii] = 0;
        }
        console.log(charList);
        console.log("counter: " + counter);
        console.log("i: " + i);
        console.log("ii:" + ii);
      }
      
    }
    return counter;
  }

binStr('10000');

// 010101
// 001010
// 000101
// 000010
// 000001
// 000000