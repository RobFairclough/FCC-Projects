
function repeatStringNumTimes(str, num) {
    'use strict';
    var repeated = "", count = 0;
    for (count = 0; count < num; count += 1) {
        repeated += str;
    } //loops string * num and repeats string each time
    return repeated;
}

repeatStringNumTimes("abc", 3);
