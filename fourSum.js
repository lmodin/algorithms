/**Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Notice that the solution set must not contain duplicate quadruplets.



Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [], target = 0
Output: []


Constraints:

0 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 input: array of positive and negative integers
 output: tuples of integers that sum to target
 constraints:
    do not return duplicates
    output tuples should be ordered ascending order
 edge cases:
    nums is empty => return empty array
    no value given for target => return empty array
    there isn't a way to reach target => return empty array
 */
var fourSum = function(nums, target) {
  //create an output array
  var output = [];

  //sort input array for efficient sum finding
  var sortedNums = nums.sort(function(a, b) {
    if (a < b) {return -1;}
    else if (a > b) {return 1;}
    else {return 0;}
  })
  //iterate through sorted integers, up to last 3 (since we're looking for solutions of length 4)
  for (var i = 0; i < sortedNums.length - 3; i++) {
    //if i is the same as previous value, skip it; we've already tried all of these solutions
    if (i > 0 && sortedNums[i] === sortedNums[i-1]) {continue;}
    //iterate through the remainder, up to the last 2
    for (var j = i+1; j < sortedNums.length - 2; j++) {
      //if j is the same as previous value, skip it; we've already tried all of these solutions
      if (j > i+1 && sortedNums[j] === sortedNums[j-1]) {continue;}
      //set up a left value and right, ie the smallest in remainder and largest (to balance when added and find target which is presumably in the middle)
      var left = j+1;
      var right = sortedNums.length-1;
      //while there are values between left and right
      while(left < right) {
        //find the sum
        var sum = sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right]
        //if the sum is too small, we need larger numbers
        if (sum < target) {left++}
        //if the sum is too big, we need small numbers
        else if (sum > target) {right--}
        else {
          //we've found the sum, add this solution to our output
          output.push([sortedNums[i], sortedNums[j], sortedNums[left], sortedNums[right]])
          //same as before, if there are duplicate values, skip them because we've already found that solution
          while(left < right && sortedNums[left] === sortedNums[left + 1]) {left++}
          while(left < right && sortedNums[right] === sortedNums[right - 1]) {right--}
          //check the next combo. we can change both at the same time because we know that only changing one won't give us a solution since we've confirmed it's not the same value (line 69-70), and changing one value will disrupt the balance of the sum
          left++;
          right--;
        }
      }
    }
  }
  //once we're done with it all, return the values we've found
  return output;
};