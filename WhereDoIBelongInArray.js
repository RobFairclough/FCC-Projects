function getIndexToIns(arr, num) {
    'use strict';
    var place = 0, i = 0;
    // Find my place in this sorted array.
    arr.sort(function (a, b) {
        return a - b;
    });
    for (i = 0; i < arr.length; i += 1) {
        if (num > arr[i]) {
            place += 1;
        }
    }
    arr.splice(place, 0, num); //inserts num into array, not asked to do but ¯\_(ツ)_/¯
    return place;  //returns where num should be inserted to the array
}

getIndexToIns([40, 60], 50);
