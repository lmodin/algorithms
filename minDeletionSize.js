/**
 * @param {string[]} A
 * @return {number}
 input: an array of strings, all of equal length, that create a matrix of sorts
 output: integer, the index of the column we want to delete
 constraints:
 edge cases: array of length 1, array[i] of length 1

 We are given an array A of N lowercase letter strings, all of the same length.

Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.

For example, if we have an array A = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef", "vyz"], and the remaining columns of A are ["b","v"], ["e","y"], and ["f","z"].  (Formally, the c-th column is [A[0][c], A[1][c], ..., A[A.length-1][c]]).

Suppose we chose a set of deletion indices D such that after deletions, each remaining column in A is in non-decreasing sorted order.

Return the minimum possible value of D.length.



Example 1:

Input: A = ["cba","daf","ghi"]
Output: 1
Explanation:
After choosing D = {1}, each column ["c","d","g"] and ["a","f","i"] are in non-decreasing sorted order.
If we chose D = {}, then a column ["b","a","h"] would not be in non-decreasing sorted order.
Example 2:

Input: A = ["a","b"]
Output: 0
Explanation: D = {}
Example 3:

Input: A = ["zyx","wvu","tsr"]
Output: 3
Explanation: D = {0, 1, 2}


Constraints:

1 <= A.length <= 100
1 <= A[i].length <= 1000
 */
var minDeletionSize = function(A) {
  let deletionIndices = [];

  //loop through the column indices
  for (var i = 0; i < A[0].length; i++) {
      //push each string's ith column to an array for that column
      var column = [];
      for (var j = 0; j < A.length; j++) {
          column.push(A[j][i]);
      }
      //console.log('column: ', column)
      //compare the column to a sorted version of the column
      //sort the column
      var sorted = column.slice()
      sorted.sort((a, b) => {
          if (a < b) {
            return -1;
          } else if (a > b) {
            return 1;
          } else {
            return 0;
          }
      })
      //console.log('sorted: ', sorted)
      var equal = true;
      //check if they're equal
      for (var k = 0; k < column.length; k++) {
        //console.log('k is: ', k)
        //console.log('column at k: ', column[k]);
        //console.log('sorted at k: ', sorted[k]);
          if (column[k] !== sorted[k]) {
              equal = false;
              break;
          }
      }
      //if not equal, add to deletion indices and loop again
      if (!equal) {
        //console.log('not equal')
          deletionIndices.push(i)
      }
  }
  return deletionIndices.length;
};