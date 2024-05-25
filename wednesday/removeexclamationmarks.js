//Probably the easiest one. Regex make things so much easier!

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    //send back the string with exclamation point replaced by using a regular expression that matches with  the '!' symbol
    return s.replace(/!/g, '');
  }

