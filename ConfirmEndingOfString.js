
function confirmEnding(str, target) {
    'use strict';
    if (str.substr(str.length - target.length) === target) { //substr truncates string
        return true;
    } else {
        return false;
    }
}
confirmEnding("Bastian", "n"); //test script
