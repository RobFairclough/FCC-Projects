function sumPrimes(num) {
  let primeArray = []
  for(let i=0; i<=num; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray.reduce((a,b)=> a + b);
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
sumPrimes(10);