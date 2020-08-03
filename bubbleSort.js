/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  //create a variable for whether or not is sorted
  var isSorted = false;

  //until it is sorted
  while(!isSorted) {
    //create a swapped variable to check if any changes were made
    var swapped = false;

    //iterate through the array
    for (var i = 0; i < array.length; i++) {
      //if (index + 1) is smaller than (index), swap them
      if (array[i + 1] < array[i]) {
        //save index value
        var larger = array[i];
        //save index + 1 value
        var smaller = array[i + 1];
        //splice array at index, delete 2 values, and insert indexPlus1, followed by index
        array.splice(i, 2, smaller, larger)
        //if swap occured, make sure it's true
        swapped = true;
      }
      //otherwise, try again with next iteration
    }

    //if iteration completes and no changes were made, change isSorted to true, end while loop
    if (!swapped) {isSorted = true;}
  }
  //return the newly sorted array
  return array;

};

//bubbleSort([2, 1, 3]); // yields [1, 2, 3]