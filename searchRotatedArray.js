/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * You are given an integer array nums sorted in ascending order, and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:
Input: nums = [1], target = 0
Output: -1
Constraints:
1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is guranteed to be rotated at some pivot.
-10^4 <= target <= 10^4
 */
var search = function(nums, target) {
  //set left
  var left = 0;
  //set right
  var right = nums.length - 1;
  //set mid
  function findMid () {
      return (Math.floor((right - left) / 2) + left)
  }
  var mid = findMid();

  function goLeft() {
      right = mid - 1;
      mid = findMid();
  }
  function goRight() {
      left = mid + 1;
      mid = findMid();
  }

  //create a recursor function to find the target
  function recursor () {
      //base case
      //console.log('left is: ', left);
      //console.log('right is: ', right);
      //console.log('mid is: ', mid);
      if (nums[mid] === target) {
          return mid;
      } else if (nums[left] === target) {
          return left;
      } else if (nums[right] === target) {
          return right;
      } else if (left === right) {
          return -1;
      }
      var sorted = false;
      if (nums[left] < nums[right]) {
          sorted = true;
      }
      if (sorted) {
          if (target < nums[mid] && nums[left] < target) {
              goLeft();
              return recursor();
          } else if (target > nums[mid] && target < nums[right]) {
              goRight();
              return recursor();
          } else {
              return -1;
          }
      } else {
          //current subsection is not sorted
          if (nums[mid] < target && target <= nums[right]) {
              goRight();
              return recursor();
          } else if (target < nums[mid] && nums[mid] < nums[left] && target <= nums[left]) {
              goLeft();
              return recursor();
          } else if (target > nums[mid] && nums[mid] < nums[left] && target >= nums[left]) {
              goLeft();
              return recursor();
          } else if (target <= nums[mid] && nums[mid] > nums[left] && target <= nums[left]) {
              goRight();
              return recursor();
          } else if (target <= nums[mid] && nums[mid] > nums[left] && target >= nums[left]) {
              goLeft();
              return recursor();
          } else if (target >= nums[mid] && nums[mid] > nums[left] && target >= nums[left]) {
              goRight();
              return recursor();
          }
      }
      return -1;
  }

  //set target = call on recursor function
  var target = recursor();
  //return the target
  return target;
};