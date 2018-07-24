function uniteUnique(arr) {
  let newArr = []
  for(let i=0; i<arguments.length; i++) {
    //^^loop through arguments
    arguments[i].forEach(function(element){
      if(!newArr.includes(element)) {
        newArr.push(element);
      //only push to new array if not included already
      }
    })
  }
  return newArr;
}