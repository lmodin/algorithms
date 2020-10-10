// Complete the countSwaps function below.
/*
Consider the following version of Bubble Sort:

for (int i = 0; i < n; i++) {

    for (int j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
        }
    }

}
Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
First Element: firstElement, where  is the first element in the sorted array.
Last Element: lastElement, where  is the last element in the sorted array.
Hint: To complete this challenge, you must add a variable that keeps a running tally of all swaps that occur during execution.

For example, given a worst-case but small array to sort:  we go through the following steps:

swap    a
0       [6,4,1]
1       [4,6,1]
2       [4,1,6]
3       [1,4,6]
It took  swaps to sort the array. Output would be

Array is sorted in 3 swaps.
First Element: 1
Last Element: 6
Function Description

Complete the function countSwaps in the editor below. It should print the three lines required, then return.

countSwaps has the following parameter(s):

a: an array of integers .
Input Format

The first line contains an integer, , the size of the array .
The second line contains  space-separated integers .

Constraints

Output Format

You must print the following three lines of output:

Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
First Element: firstElement, where  is the first element in the sorted array.
Last Element: lastElement, where  is the last element in the sorted array.
Sample Input 0

3
1 2 3
Sample Output 0

Array is sorted in 0 swaps.
First Element: 1
Last Element: 3
Explanation 0
The array is already sorted, so  swaps take place and we print the necessary three lines of output shown above.

Sample Input 1

3
3 2 1
Sample Output 1

Array is sorted in 3 swaps.
First Element: 1
Last Element: 3
Explanation 1
The array is not sorted, and its initial values are: . The following  swaps take place:

At this point the array is sorted and we print the necessary three lines of output shown above.

input: an array of integers
output: integer representing the number of swaps it took to get the array sorted
edge cases: a is empty? no swaps needed?
*/
function countSwaps(a) {
  //create a variable to count the number of swaps
  var swapCount = 0;
  //create a variable to indicate that array is not sorted
  var isSorted = false;
  //while array is not sorted
  while(!isSorted) {
      //create a variable to indicate if there was a swap on this pass, set false
      var madeSwap = false;
      //iterate through the array
      for (var i = 0; i < a.length -1; i++) {
          //if a value is less than the value after
          if (a[i] > a[i + 1]) {
              //swap the values
              let larger = a[i];
              a[i] = a[i + 1];
              a[i + 1] = larger;
              //change swap variable to true
              madeSwap = true;
              //increment the swap count
              swapCount++;
          }
      }
      //if we're done iterating and there was no swap,
      if (!madeSwap) {
          //change sorted variable to true
          isSorted = true;
      }
  }
  //log "sorted in x swaps"
  console.log(`Array is sorted in ${swapCount} swaps.`)
  //log "first element: "
  console.log('First Element:',a[0])
  //log "last element: "
  console.log('Last Element:',a[a.length -1])
}