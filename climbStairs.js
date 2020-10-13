/*You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step


Constraints:

1 <= n <= 45
*/

//===================================================
// DYNAMIC PROGRAMMING SOLUTION
//===================================================
var climbStairs = function(n) {
  //goal: create a naive solution to find a formula to make a better one!
  //create a steps combo variable to track how many unique combos there are
  var comboCounts = [0, 1, 2];
  //create an array to push the sums to, put 1 & 2 in there already
  //iterate through from i = 3 to n
  for (var i = 3; i <= n; i++) {
      //the combo count is the sum of the previous two combo counts
      comboCounts[i] = comboCounts[i-2] + comboCounts[i-1];
  }
  //return combo count variable
  return comboCounts[n];

};

//===================================================
// RECURSIVE SOLUTION
//===================================================
var climbStairs = function(n) {
  //goal: create a naive solution to find a formula to make a better one!
  //create a steps combo variable to track how many unique combos there are
  var comboCount = 0;
  //create a recursor function that will check all the options
  var findCombos = (steps, sum) => {
      //sum of values is === n
      if (sum === n) {
          //increment combo count
          comboCount++;
          return;
      } else if (sum > n) {
      //sum of values is larger than n
          //return
          return;
      }
      //add one, and call again
      let stepsPlusOne = steps + 1;
      let sumPlusOne = sum + 1;
      findCombos(stepsPlusOne, sumPlusOne)
      //add two, and call again
      let stepsPlusTwo = steps + 2;
      let sumPlusTwo = sum + 2;
      findCombos(stepsPlusTwo, sumPlusTwo)
  }

  //call the recursor function with 0 steps
  findCombos(0, 0);
  //return combo count variable
  return comboCount

};