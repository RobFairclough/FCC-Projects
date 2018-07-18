function pairElement(str) {
  let pairs = {"A":"T", "T":"A","G":"C", "C":"G"}
  let arr = str.split("");
  let pairsArr = [];
  arr.forEach(first=> pairsArr.push([first, pairs[first]]))
  //pairs[first] will match the first input with its pair in 'pairs' object, then push both to pairsArr
  return pairsArr;
}
