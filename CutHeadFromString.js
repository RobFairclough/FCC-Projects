function slasher(arr, howMany) {
    'use strict';
    arr.splice(0, howMany); //removes howMany from index 0 onward
    return arr;
}

slasher([1, 2, 3], 2);


/*Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.*/