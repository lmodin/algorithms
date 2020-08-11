/*
Given an array of string words. Return all strings in words which is substring of another word in any order.

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
*/

let stringMatches = (arr) => {
  let substrings = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      //check both ways
      if (arr[i].indexOf(arr[j]) > -1) {
        if(!substrings.includes(arr[j])) {substrings.push(arr[j])}
      } else if (arr[j].indexOf(arr[i]) > -1) {
        if(!substrings.includes(arr[i])) {substrings.push(arr[i])}
      }
    }
  }
  return substrings;
}

console.log(stringMatches(["blue","green","bu",'blue']))
