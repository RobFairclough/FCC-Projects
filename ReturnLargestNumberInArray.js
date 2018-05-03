
function largestOfFour(arr) {
    'use strict';
    var count1 = 0, count2 = 0, largest = [], biggest = 0;
    for (count1 = 0; count1 < arr.length; count1 += 1) { //loop through array
        for (count2 = 0, biggest = 0; count2 < arr[count1].length; count2 += 1) { //loop through subarray, reset biggest number to 0 on each loop
            if (arr[count1][count2] > biggest) {
                biggest = arr[count1][count2];
            }
        }
        largest.push(biggest); //add largest number to array
    }
    return largest;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //tests script
//note that this script only works for positive numbers, won't find the largest number in an array with no numbers above 0