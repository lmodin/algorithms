/**
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:
Input: haystack = "", needle = ""
Output: 0
Constraints:

0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 test: strStr('abcdef', 'def') = 3;
 test: strStr('xyz', 'a') = -1;
 test: strStr('abc', '') = 0;
 test: strStr('', '') = 0;
 test: strStr('', 'a') = -1;
 */
var strStr = function(haystack, needle) {
  //if needle is empty => 0;
  if (!needle.length) {return 0;}
  //iterate through the haystack
  for (var i = 0; i < haystack.length; i++) {
      //at i, check if it's the start of the "needle" substring
      let subStr = haystack.slice(i, needle.length + i)
      if (subStr === needle) {
          return i;
      }
  }
  //if we reach end, nothing was returned
  //return -1 => it wasn't found
  return -1;
};