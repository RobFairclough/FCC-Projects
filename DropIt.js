function dropElements(arr, func) {
  let newArr = arr.slice()
  //declare newArr to prevent input from being mutated
  for (let i = 0; i < arr.length; i++) {
    if (func(newArr[i]) === true) {
      return newArr.filter(x=> x!= undefined);
      //remove empty array elements
    }else {
      delete newArr[i]
      //use delete instead of splice to preserve index
    }
  }
  return newArr.filter(x=> x !=undefined);
  //empty array if no element matches function
}

dropElements([1, 2, 3], function(n) {return n < 3; });