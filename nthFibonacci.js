/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

var nthFibonacci = function (n) {
  // set edge cases for if it's 0, or 1
  if (n === 0) {return 0;}
  else if (n === 1) {return 0;}
  //create a recursor that takes in two values previous, counter: n-2, n-1, counter
  function recursor (minusTwo, minusOne, count) {
    //if counter === n, return the value of the two previous added together
    if (count === n) {
      return minusTwo + minusOne;
    } else {
    //otherwise
      //call recursor again, with n-1 now as n-2, n-1 is previous two added together, counter++
      count++
      return recursor(minusOne, (minusOne + minusTwo), count);
    }
  }
  //return the call to the recursor with 0, 1, and counter as 2
  return recursor(0, 1, 2);
};



