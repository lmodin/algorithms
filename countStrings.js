/*
 * Complete the 'countStrings' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function countStrings(s) {
  // Write your code here
  var count = 0;
  if (s[0] === s[s.length - 1]) {
      count++;
  }
  for (var i = 0; i < s.length - 1; i++) {
      if (s[i] === s[i+1]) {
          count++;
      }
  }
  return count
}