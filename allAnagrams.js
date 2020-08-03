/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
  // create an array to hold all the anagrams
  var anagrams = [];
  //base case
  if (string.length === 1) {
      anagrams.push(string);
      return anagrams;
  }
  for (var i = 0; i < string.length; i++) {
      var letter = string[i];
      var remainingLetters = string.substring(0, i) + string.substring(i + 1);
      var anagram = allAnagrams(remainingLetters);
      for (var j = 0; j < anagram.length; j++) {
          anagrams.push(letter + anagram[j]);
      }
  }

  return anagrams;
};



var anagrams = allAnagrams('abbs');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
