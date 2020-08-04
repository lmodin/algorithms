/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // create a letters object
  var letters = {};
  //split the first string
  var first = string1.split('');
  //split the second string
  //var second = string2.split('');
  //iterate over the first string
  for (var i = 0; i < first.length; i++) {
    //add each letter to an object
    letters[first[i]] = true;
  }

  //iterate through the keys of the object
  for (var key in letters) {
   //if the key is contained within second string
    for(var j = 1; j < arguments.length; j++)

      if (arguments[j].indexOf(key) < 0) {
        //delete the key
        delete letters[key]
        break;
       }
  }
  //take the keys and join into string
  return Object.keys(letters).join('');

};
