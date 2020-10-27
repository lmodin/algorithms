/**
 * @param {number[]} nums
 * @return {number[][]}
 input: array of integers
 output: arry of tuples of integers, representing the integer combinations that sum to 0

 Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 */
var threeSum = function (nums) {
  //edge cases: nums is length < 3,
  if (nums.length < 3) { return []; }
  //create a dictionary to store tuples, etc.
  let combos = [];
  //sort the nums in the array
  nums.sort(function (a, b) {
    return a - b;
  })
  //create pointers for beginning and ending
  let right, left;
  //iterate across the nums array
  for (var i = 0; i < nums.length - 2; i++) {
    //at each i, set beginning pointer to i+1, and ending to length - 1
    if (i >= 0 && nums[i] !== nums[i - 1]) {
      if (nums[i] > 0) { break; }
      let sum = 0 - nums[i]
      right = nums.length - 1;
      left = i + 1;
      while (left < right) {
        let tuple = [nums[i], nums[left], nums[right]];
        //let sum = tuple.reduce(function (a,b) {return a+b}, 0)
        if (nums[left] + nums[right] === sum) {
          combos.push(tuple);
          while (left < right && nums[left] === nums[left + 1]) { left++ }
          while (left < right && nums[right] === nums[right - 1]) { right-- }
          left++
          right--
        } else if (nums[left] + nums[right] > sum) {
          //we need smaller numbers, decrement right;
          right--;
        } else {
          left++;
        }
      }
    }


  }

  //return the combos
  return combos;

};