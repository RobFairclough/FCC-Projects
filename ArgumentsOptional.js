function addTogether() {
  const args = Array.from(arguments);
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      return undefined; 
    }
  } // check for valid number input
  if (args.length === 1) { 
    let first = args[0];
    return function(second) {
      if (typeof second === "number") {
      return first + second;
      }else return undefined;
    }
  }else if (args.length === 2) {
  return args[0] + args [1];
  //initially used reduce but with only 2 arguments summing like this is cleaner
  }
}
addTogether(2,3);