/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/


var reverseWords = function(s) {
  //split s into an array of words
  let words = s.split(' ');
  let backwardsWords = [];
  //iterate through words array
  for (var i = 0; i < words.length; i++) {
    //at each word, split the word
      let letters = words[i].split('');
    //create an array for the backwards letters
      let backwards = [];
    //iterate through the letters back to front
      for (var j = letters.length - 1; j >= 0; j--) {
      //push each letter to the array
          backwards.push(letters[j])
      }
    //join the letters array
      backwards = backwards.join('');
    //update the words array with the new letters
      backwardsWords.push(backwards);
  }

  //join words array with spaces
  let sentence = backwardsWords.join(' ')
  //return words
  return sentence
};