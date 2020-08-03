/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 var index = binarySearch([1, 2, 3, 4, 5], 4);
 console.log(index); // 3
 var index = binarySearch([1, 2, 3, 4, 5], 8);
 console.log(index); // null
 */

var binarySearch = function (array, target) {
  //set startpoint to 1st index
  var start = 0;
  //set endpoint to last index
  var end = array.length - 1;
  //find the midpoint of the array (math.floor)
  mid = Math.floor(((end - start) / 2) + start)
  //check if the midpoint is greater than or less than the target
  if (array[mid] === target) {
    return mid;
  }
  //create recursor
  var recursor = function(start, end, mid) {
    //base case: array[mid] === target; return mid
    if (array[mid] === target) {
      return mid;
    } else if (start >= end) {
      // or start >= end, return null
      return null;
    }
    //check if array[mid] is > target
    if (array[mid] > target) {
      end = mid - 1;
    } else if (array[mid] < target) {
      //check if array[mid] is < target
      start = mid + 1;
    }
    //recalculate mid
    mid = Math.floor(((end - start) / 2) + start)
    //call recursor on new start, end, mid
    return recursor(start, end, mid);
  }
  return recursor(start, end, mid);
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3
var index = binarySearch([1, 2, 3, 4, 5], 8);
console.log(index); // null