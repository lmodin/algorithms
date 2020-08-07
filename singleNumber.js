/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

let singleNumber = (arr) => {
  let store = {};
  for (var i = 0; i < arr.length; i++) {
    if (store[arr[i]]) {
      delete store[arr[i]];
    } else {
      store[arr[i]] = true;
    }
  }
  return Object.keys(store)[0];
}