// Complete the makeAnagram function below.
/*
Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

For example, if  and , we can delete  from string  and  from string  so that both remaining strings are  and  which are anagrams.

Function Description

Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

makeAnagram has the following parameter(s):

a: a string
b: a string
Input Format

The first line contains a single string, .
The second line contains a single string, .

Constraints

The strings  and  consist of lowercase English alphabetic letters ascii[a-z].
Output Format

Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.
input: two strings
output: integer representing deletions required to make anagrams of the two strings
constraints
edge cases: no deletions required; cannot be made into anagrams => deleting all of the letters
*/
function makeAnagram(a, b) {
  //create a deletioncount variable
  var deletionCount = 0;
  //create a dictionary
  var dict = {};
  //go through the first string to make a dictionary of all the letters
  for (var i = 0; i < a.length; i++) {
      if (dict[a[i]]) {
          dict[a[i]]++;
      } else {
          dict[a[i]] = 1;
      }
  }
  //console.log(dict);
  //go through the second string, counting which letters aren't in the dictionary
  for (var i = 0; i < b.length; i++) {
      //if they are in dictionary, either decrement or delete them

      if (dict[b[i]] > 1) {
          dict[b[i]]--;
          console.log('decrementing: ', b[i])
      } else if (dict[b[i]] === 1) {
          delete dict[b[i]]
          console.log('deleting: ', b[i])
      } else {
          deletionCount++;
          console.log("not found: ", b[i])
      }
  }
  //at the end, add the length of the letters in the dictionary and the deletions made from the second string
  let leftover = (Object.values(dict).reduce(function(a, b) {return a + b},0))
  return deletionCount + leftover;
}

let a = 'abcddef'
let b = 'defghifjklm'
let c = 'fcrxzwscanmligyxyvym'
let d ='jxwtrhvujlmrpdoqbisbwhmgpmeoke'

console.log(makeAnagram(c,d))
// fcrxzwscanmligyxyvym
// jxwtrhvujlmrpdoqbisbwhmgpmeoke