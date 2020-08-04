/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function (string) {
  string = string.toLowerCase()
  if (string === '') {
    return [];
  }
  //create a result variable
  var result = [];
  //create an object to store the stuff
  var store = {};
  //iterate through the string and
  for (var i = 0; i < string.length; i++) {
    //if it's not already there,
    if (!store[string[i]]) {
      //add to store
      store[string[i]] = 1;
    } else {
      //otherwise, increment store
      store[string[i]]++;
    }
  };

  //iterate through the object
  for (var key in store) {
    //for each key, push [key, value] to result array
    result.push([key, store[key]]);
  };
  result.sort(function (a, b) {
    if (a[0] < b[0]) { return -1 }
    if (a[0] > b[0]) { return 1 }
    return 0;
  });
  //sort array by value desc, character asc
  result.sort(function (a, b) {
    return b[1] - a[1];
  });

  return result;
};