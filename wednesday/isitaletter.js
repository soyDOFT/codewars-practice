function isItLetter(character) {
    //returns the result of testing the lowercase character to the 
    //regular expression that looks for any letter from a-z
    return /[a-z]/g.test(character.toLowerCase());
}

console.log(isItLetter('0'));