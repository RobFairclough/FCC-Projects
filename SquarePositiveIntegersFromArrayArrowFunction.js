const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const positiveIntegers = arr.filter(pos => pos > 0 && Number.isInteger(pos));
  console.log(positiveIntegers);
  const squaredIntegers = positiveIntegers.map(squ => Math.pow(squ, 2));
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);