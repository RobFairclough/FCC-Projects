function sumFibs(num) {
  let fibonacci = [0, 1];
  
  for (let i = 2; (fibonacci[i-1] + fibonacci[i-2]) <= num; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  }
  //^^establish fibonacci sequence array up to num
  return fibonacci.filter(fib=> (fib%2 !== 0))
  //^^filter to only odd numbers
  .reduce((a,b)=> a+b)
  //^^sum the array of odd numbers 
  
  
}

sumFibs(4);