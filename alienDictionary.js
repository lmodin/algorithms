/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.



Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).


Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  //helper to check if alphabetical
  var isAlphabetical = function(w1, w2) {
      //if the two words are the same
      if (w1 === w2) {
          return true
      }
      var areEqual = true;
      for (var i = 0; i < w1.length && i < w2.length; i++) {
          //console.log(’letters are: ’, w1[i], w2[i])
          if (order.indexOf(w1[i]) > order.indexOf(w2[i])) {
              return false;
          } else if (order.indexOf(w1[i]) < order.indexOf(w2[i])) {
              areEqual = false;
              break;
          }
      }
      if (areEqual) {
          //console.log(’equal so far!’)
          if (w1.length < w2.length) {
              return true
          } else {
              return false
          }
      }
      // true
      return true;
  }
  //iterate thru the words
  for (var i = 0; i < words.length - 1; i++) {
    //check if alphabetical
      if (!isAlphabetical(words[i], words[i + 1])) {
          //if not alphabetical, break function and return false
          return false;
      }
  }
  //if reached end of words list and haven’t broken
  return true;
};