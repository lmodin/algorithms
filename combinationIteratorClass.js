/**
 * Design an Iterator class, which has:

A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
A function next() that returns the next combination of length combinationLength in lexicographical order.
A function hasNext() that returns True if and only if there exists a next combination.


Example:

CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.

iterator.next(); // returns "ab"
iterator.hasNext(); // returns true
iterator.next(); // returns "ac"
iterator.hasNext(); // returns true
iterator.next(); // returns "bc"
iterator.hasNext(); // returns false


Constraints:

1 <= combinationLength <= characters.length <= 15
There will be at most 10^4 function calls per test.
It's guaranteed that all calls of the function next are valid.
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
  this.characters = characters;
  this.combinationLength = combinationLength;

  let iterator = (characters, length) => {
      let combos = []
      let recursor = (characters, lettersLeft, string) => {
          if (lettersLeft < 1) {
              combos.push(string);
              return;
          }
          lettersLeft--;
          if (!characters.length) {
              return;
          }
          for (var i = 0; i < characters.length; i++) {
              let newRemainder = characters.slice(i+1);
              let newString = string + characters[i];
              recursor(newRemainder, lettersLeft, newString)
          }
      }
      recursor(characters, combinationLength, "");
      return combos
  }

  this.iterations = iterator(characters, combinationLength)
  this.pointerIndex = 0;
};

/**
* @return {string}
*/
CombinationIterator.prototype.next = function() {
  let next = this.iterations[this.pointerIndex];
  this.pointerIndex++;
  return next;
};

/**
* @return {boolean}
*/
CombinationIterator.prototype.hasNext = function() {
  if (this.pointerIndex > this.iterations.length - 1) {
      return false;
  } else {
      return true;
  }
};
