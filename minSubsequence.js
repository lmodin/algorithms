/**
Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence.

If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.

Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.



Example 1:

Input: nums = [4,3,10,9,8]
Output: [10,9]
Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements.
Example 2:

Input: nums = [4,4,7,6,7]
Output: [7,7,6]
Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to returned in non-decreasing order.
Example 3:

Input: nums = [6]
Output: [6]
* @param {number[]} nums
 * @return {number[]}
 input: an array of numbers
 output: an array of numbers
 constraints:
 edge cases:
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 input: an array of numbers
 output: an array of numbers
 constraints:
 edge cases:
 */
var minSubsequence = function(nums) {
  //create a storage object for each of the qualifying subsets
  //. keep track of: values, sum
  if (nums.length <= 1) {
      return nums;
  }
  var subSets = [];
  nums = nums.sort((a, b) => {
      if (a > b) {
          return -1;
      } else if (a < b) {
          return 1;
      } else {
          return 0;
      }
  });
  //console.log(nums)
  //while i < length (either while or for loop here)
  var i = 1;
  while (i < nums.length) {
      // and j > than i (go backwards from end here)
          //sum all the values from i to j
          var insideSum = nums.slice(0,i).reduce((accum, curr) => (accum + curr))
          //sum all the rest
          var outsideSum = nums.slice(i).reduce((accum, curr) => (accum + curr));
          //console.log('inside: ', insideSum)
          //console.log('outside: ', outsideSum)
          //if the values inside the subset are larger than outside
          if (insideSum > outsideSum) {
              //add to the storage object
              subSets.push({values: nums.slice(0, i), sum: insideSum, len: (i)})
          }
          i++;
  }

  //sort all the values stored in storage (if there are more than one)
 if (subSets.length === 0) {
     return nums
 } else if (subSets.length === 1) {
      return subSets[0].values;
  }
  //console.log(subSets)
  subSets.sort((a, b) => {
      if (a.len > b.len) {
          return 1;
      } else if (a.len < b.len) {
          return -1;
      } else {
          return 0;
      }
  })
  if (subSets[0].len === subSets[1].len) {
      var i = 1;
      while (subSets[0].len === subSets[i].len) {
          i++;
      }
      subSets = subSets.slice(0, i)
  } else {
    return subSets[0].values;
  }
  subSets.sort((a, b) => {
      if (a.sum > b.sum) {
          return -1;
      } else if (a.sum < b.sum) {
          return 1;
      } else {
          return 0;
      }
  })
  //take the highest summed one
  return subSets[0].values
};

