
function findLongestWord(str) {
    'use strict';
    var longest = " ", words = str.split(" "), i = 0; //initilise variables
    for (i = 0; i < words.length; i += 1) {
        if (words[i].length >= longest.length) {
            longest = words[i]; //set longest to word if it's longer than current longest
        }
    }
    return longest.length; //return length of longest word, not actual longest word 
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //test
