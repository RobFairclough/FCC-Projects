//Check for palindrome
function reverseString(str) {
    "use strict";
    var reversed = "", count = str.length;
    for (count = str.length; count > -1; count -= 1) { //loop through string backwards
        reversed += str.charAt(count); //add each letter to 'reversed' string from end to start 
    }
    return reversed; //result
} //utilised code from StringReverser 


function palindrome(str) {
    // Good luck!
    'use strict';
    var forwards = str.toLowerCase().replace(/[^a-z0-9]/g, ''); //change to lower case, use regular expression to remove special charcters
    var backwards = reverseString(forwards);
    if (forwards === backwards) {
        return true;
    } else {
        return false;
    }
  
}



palindrome("eye");