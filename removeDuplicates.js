/*
Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.



Example 1:

Input: "abbaca"
Output: "ca"
Explanation:
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".


Note:

1 <= S.length <= 20000
S consists only of English lowercase letters.
*/


var removeDuplicates = function(S) {
  //once iteration is complete, if there were any changes, rerun iterator
  var string = S
  var changesMade = true;
  while (changesMade) {
  //when there were no changes
      let edits = removeLetters(string)
      if (string === edits) {
          changesMade = false;
      } else {
          string = edits;
          changesMade = true;
      }
  }
  return string;
};

var removeLetters = function(s) {
  //iterate through s
  var letters = s.split('');
  for (var i = 0; i < letters.length; i++) {
  //if this letter is equal to the next letter,
      if (letters[i] === letters[i+1]) {
      //remove this letter and the next
          letters.splice(i, 2);
      //decrement i so the iterator looks at that i again
          i--;
      }
  }
  //return s
  return letters.join('');
}