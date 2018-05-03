function factorialize(num) {
    "use strict";
    var count = 1, factorial = 1;
    for (count = 1; count < (num + 1); count += 1) {
        factorial *= count;
    }
    //Initialises a counter, then multiplies 1 * the counter until the count reaches the number wanted to factorialise e.g 5 is 1 * 2 * 3 * 4 * 5
    
    return factorial;
}

factorialize(5); //tester can be removed before use