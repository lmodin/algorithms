/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  //create an object to keep track of the number of times you've seen each number
  var counter = {};
  //iterate through the array
  for (var i = 0; i < arr.length; i++) {
    //if object at index exists,
    if (!counter[arr[i]]) {
      //add object at stringified value, with 0
      counter[arr[i]] = 1;
    } else {
      counter[arr[i]] ++
    }
  }

  //iterate through the keys in the object
  for (var key in counter) {
    //if value is even
    if (counter[key] % 2 === 0) {
      //return key
      return key;
    }
  }
  return null

};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven === '4');  //returning a string
var anotherEven = evenOccurrence([1, 2, 1, 2, 1, 2, 3, 3, 3, 2, 1]);
console.log(anotherEven === '1'); //returning a string
var mixed = evenOccurrence(['meow', 1, 1, 'meow']);
console.log(mixed)