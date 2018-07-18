function fearNotLetter(str) {
  const letterArr = str.split("");
  //creates array of letters in string
  const codeArr = letterArr.map(x=> x.charCodeAt(0));
  //creates array of charcodes from letters array
  //console.log(letterArr);
  //console.log(codeArr);
  for (let i = 1; i<(codeArr.length-1); i++) {
    //loop through codes array
    if (codeArr[i] !== (codeArr[(i+1)] - 1)) {
      return String.fromCharCode(codeArr[i] + 1);
      //checks if the element at [i] is in sequence, if not then return the missing letter
    }
  }
  //no further returns so if no missing letter in sequence found functino will return undefined.
}

fearNotLetter("abce");