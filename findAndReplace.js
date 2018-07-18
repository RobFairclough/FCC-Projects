function myReplace(str, before, after) {
  let insert = "";  
  let strArr = str.split(" ");
  let foundIndex = strArr.findIndex(x=> x=== before);
   //find index of before
  if (before[0].toUpperCase() === before[0]) {
    insert = (after.substring(0,1).toUpperCase() + after.substring(1));
  }else if (before[0].toLowerCase() === before[0]) {
    insert = (after.substring(0,1).toLowerCase() + after.substring(1));
  }  //checks the case of first char in before and matches case of first char in after to that
  strArr.splice(foundIndex, 1, insert);
  //splice 'after' in at foundindex, removing 'before'
  return strArr.join(" ");
  //rejoin array to string
}
