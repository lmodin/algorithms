
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
//create a number value for output, set equal to zero
var number = 0;
// split the roman Numeral into an array
var romans = romanNumeral.split('');
// iterate through the array
for (var i = 0; i < romans.length; i++) {
  // replace each value in the array with the digital value
  romans[i] = DIGIT_VALUES[romans[i]]
}
// go through the array with digital values
for (var j = 0; j < romans.length; j++) {
  // if the current value is less than the value next, multiply by -1
  if (romans[j] < romans[j + 1]) {
    romans[j] = romans[j] * (-1)
  }
  // add value to number
  number += romans[j]
}
//return number
return number
};
