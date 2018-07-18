function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let newStr = str.split(/\W|(?=[A-Z])/g).join("-").toLowerCase().replace(/_/g, "");
  return newStr;
}//splits string at non-words, then by capitals using a positive lookahead to keep the capital letter in, then converts string to lower case uses replace to remove underscores
spinalCase('This Is Spinal Tap');