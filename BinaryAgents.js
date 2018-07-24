function binaryAgent(str) {
  let binaryValues = {0:128, 1:64 , 2:32, 3:16, 4:8, 5:4, 6:2, 7:1,} //holds values to convert bits by index
  let chars = str.split(" ").map(x=> x.split(""));
  //^^split input string into individual byte arrays
  let charCodes = [];
  chars.forEach(function(byte){
    let letterCode = 0;
    for (let i = 0; i<byte.length; i++) {
      //loop each bit and get its value
      if (byte[i] ==1) {
        letterCode += binaryValues[i]
      }
    }charCodes.push(letterCode);
    //converts binary byte to UTF-16 charcode
  })
  return String.fromCharCode(...charCodes);
  //use spread operator to convert charCodes array to a string
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");