function smallestCommons(arr) {

  let test = 0; //number to check if evenly divisible by all
  let rangeArr = []; //holds numbers to check against
  let counter = 1; //counter for 'do' loop
  let j = 0; //counter for 'for' loop
  let high = Math.max(...arr); //sets max
  let low = Math.min(...arr); //sets min

  for (let i = high; i>= low; i--) {
    rangeArr.push(i); 
  } //^^ establishes range of numbers to loop through ^^

   do {
    test = rangeArr[0] * counter * rangeArr[1]; 
    for (j = 2; j < rangeArr.length; j++) { //loop until reach end of range
      if (test % rangeArr[j] !== 0) {
        break; //break loop if test number isn't divisible by a number in the range
      }
    }

    counter++;
  } while (j !== rangeArr.length); //checks if above loop didn't break, signifying all numbers divisible
  return test;
}

smallestCommons([1,5]);