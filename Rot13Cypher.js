function rot13(str) {
    'use strict';
    function decode (charcode){
      if (charcode < 65 || charcode > 90) {
        return charcode; // doesn't decode if not recognised as capital letter
    }else if (charcode < 78){
        return charcode + 13; // moves code upwards for first half of alphabet
    }else if (charcode > 77) {
        return charcode - 13; // moves code downwards for second half of alphabet, simulates going past Z and starting over
    }};
    
    return str.split("").map(char=>String.fromCharCode(decode(char.charCodeAt()))).join("");
    // split string to individual characters, then decode each character and return as a new string
}
rot13("SERR PBQR PNZC");