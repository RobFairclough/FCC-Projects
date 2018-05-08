/*
function destroyer(arr) {
  // Remove all the values
 var args = Array.prototype.slice.call(arguments);
 var i = 0, x = 0;
 for (i = 1; i < arr.length; i += 1) {
   for (x = 0; x < args.length; x += 1) {
     console.log(args[i] + " arguments i ");
     console.log(args[0][x] + " (arguments 0 x)");
     if (args[0][x] === args[i]) {
       args[0].splice(x, 1);
     }
   }
 }
   console.log(args + " the end array");
  return arr; 
  
  my original code - doesn't work needs troubleshooting to figure why I was going so wrong'*/
  
  function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
//remove elements from first argument array that are same as following arguments
//

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
