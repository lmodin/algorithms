// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

let moveZeros = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      //remove the 0
      arr.slice(i, 1);
      //add 0 to the end
      arr.push(0);
      //decrement i so as not to skip a place in the array
      i--;
    }
  }
  return arr;
}