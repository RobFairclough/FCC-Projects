function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArr = [].concat(...arr); //flatten initial array
  let finalArr = []; //establish result array
  newArr.forEach(element => {
    if (Array.isArray(element)) { //check for further nesting
      finalArr = finalArr.concat(...element);  //flatten and add if nested
    }else finalArr.push(element); //add to result if not nested
  })
  return finalArr;
}

steamrollArray([1, [2], [3, [[4]]]]);