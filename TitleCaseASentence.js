function titleCase(str) {
    'use strict';
    var words = str.split(" "), count = 0; //converts string into array of words
  
    for (count = 0; count < words.length; count += 1) {
        words[count] = words[count][0].toUpperCase() + words[count].slice(1).toLowerCase();
    } //loop creates array of Capitalised Words
    str = words.join(" "); //joins array into string
    return str;
}

titleCase("I'm a little tea pot");