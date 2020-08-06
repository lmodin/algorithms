/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

let twoSum = (arr, target) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

let twoSumWithRefObject = (arr, target) => {
  let storage = {};
  for (var i = 0; i < arr.length; i++) {
    if (storage[arr[i]]) {
      return [storage[arr[i]], i];
    } else {
      var remainder = target - arr[i];
      storage[remainder] = i;
    }
  }
  return null;
}