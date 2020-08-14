/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

 var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  //create an output array for all the word combos
  var combos = [];

  //create a helper recursor
  var addLetter = function(digits, word) {
  //give it parameters: remaining digits, unfinished word
    //base case: if unfinished word is as long as the original input
    if (word.length === digitString.length) {
      //add the word to the array and return
      combos.push(word);
      return;
    }
    var options = phoneDigitsToLetters[digits[0]]
    //iterate through the letters in the object for first remaining digit
    for (var i = 0; i < options.length; i++) {
      //call recursor on: (remaining digits.slice(1),
      //                    word + current letter)
      addLetter(digits.slice(1), word + options[i]);
    }
  }
  //call recursor on: copy of digit string, empty string
  addLetter(digitString.slice(), '');

  //return the array of word combos.
  return combos;
}

console.log(telephoneWords('2745'))