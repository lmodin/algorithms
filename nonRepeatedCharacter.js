/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // split the string into an array
  var letters = string.split('');
  //create an object for storage
  var storage = {};
  // iterate through the array, pushing values to an object with counts
  for (var i = 0; i < letters.length; i++) {
    if (storage[letters[i]]) {
      storage[letters[i]] ++;
    } else {
      storage[letters[i]] = 1;
    }
  }
  //iterate through the object and return the first one that has value 1
  for (var letter in storage) {
    if (storage[letter] === 1) {
      return letter;
    }
  }
  //if no value with 1, return null
  return null;
};

console.log(firstNonRepeatedCharacter('asdfsab'))