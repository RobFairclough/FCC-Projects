function palindrome(str) {
  // Good luck!
  let newStr = str.match(/[a-z0-9]/gi).join("").toLowerCase();
  // filter string of non-alphanumeric chars and convert to lowercase
  let reverse = "";
  console.log(newStr);
  for (let i = newStr.length - 1; i>=0; i--) {
    reverse += newStr[i];
  }// reverse string
  return reverse===newStr; 
  //check for equality and return
}

palindrome("eye");

/*
Alternative 
  function palindrome(str) {
      return str.replace(/[\W_]/g, '').toLowerCase() ===
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    }
    
Didn't know about array.prototype.reverse before completing challenge and looking at other solutions so I like this solution better.

*/