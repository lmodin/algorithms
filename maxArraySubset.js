//dynamic programming solution to max subset of non-consective numbers
function maxSubsetSum(arr) {
    //create a variable to track the max sum
    var maxSum = Math.max(arr[0], arr[1]);
    //create a maxVals array that tracks the max value so far at that index
    var maxVals = [arr[0], maxSum];

  //iterate through the array
  for (var i = 2; i < arr.length; i++) {
      /*the max value at this point is either:
        a) the max val at 2 points earlier plus value at i
        b) the current value
        c) the max sum
      */
      maxVals[i] = Math.max((maxVals[i-2] + arr[i]), arr[i], maxSum)
      //the max overall sum is now either the already found max, or the new max
      maxSum = Math.max(maxVals[i], maxSum)
  }
    //return max sum
    return maxSum;
}

/*
===============================================================================================
INSTRUCTIONS FROM HACKERRANK AND EXAMPLES
===============================================================================================
Given an array of integers, find the subset of non-adjacent elements with the maximum sum. Calculate the sum of that subset.

For example, given an array  we have the following possible subsets:

Subset      Sum
[-2, 3, 5]   6
[-2, 3]      1
[-2, -4]    -6
[-2, 5]      3
[1, -4]     -3
[1, 5]       6
[3, 5]       8
Our maximum subset sum is .

Function Description

Complete the  function in the editor below. It should return an integer representing the maximum subset sum for the given array.

maxSubsetSum has the following parameter(s):

arr: an array of integers
Input Format

The first line contains an integer, .
The second line contains  space-separated integers .

Constraints

Output Format

Return the maximum sum described in the statement.

Sample Input 0

5
3 7 4 6 5
Sample Output 0

13
Explanation 0

Our possible subsets are  and . The largest subset sum is  from subset

Sample Input 1

5
2 1 5 8 4
Sample Output 1

11
Explanation 1

Our subsets are  and . The maximum subset sum is  from the first subset listed.

Sample Input 2

5
3 5 -7 8 10
Sample Output 2

15
Explanation 2

Our subsets are  and . The maximum subset sum is  from the fifth subset listed.
*/