//Similar to other problems, just a simple regular expression

//Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.
function isItLetter(character) {
    //returns the result of testing the lowercase character to the 
    //regular expression that looks for any letter from a-z
    return /[a-z]/g.test(character.toLowerCase());
}

console.log(isItLetter('0'));