function truthCheck(collection, pre) {
  let check = collection.map(x=> !x[pre]).filter(x=> x=== true); //map array by whether condition is not met
  //filter to only true
  return check.length < 1;  
  //if any condition wasn't met, return false else true
} 

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//alt 
//return collection.every(obj=> obj[pre]);
//checks that every obj has property and truthy value