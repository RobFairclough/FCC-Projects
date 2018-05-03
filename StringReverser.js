
function reverseString(str) {
    "use strict";
    var reversed = "", count = str.length;
    for (count = str.length; count > -1; count -= 1) { //loop through string backwards
        reversed += str.charAt(count); //add each letter to 'reversed' string from end to start 
    }
    return reversed; //result
}
reverseString("hello"); // tester - not needed if code reused
