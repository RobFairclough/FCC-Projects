
function chunkArrayInGroups(arr, size) {
    'use strict';
    var i = 0, newArray = [];
    for (i = 0; i < arr.length; i += size) { //loops array (length / size) times
        newArray.push(arr.slice(i, (i + size)));
    }
    return newArray;
  //Function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
