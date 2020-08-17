/**
 * You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.



Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

 */
var reorderLogFiles = function(logs) {
  //create a letter logs array and a digit logs array
  var letters = [];
  var digits = [];
  //iterate through the logs
  for (var i = 0; i < logs.length; i++) {
    //=> split the log at each word.
      let log = logs[i].split(' ');
    // if the second word is a word => if !Number('word')
      if (Number(log[1]) !== 0 && !Number(log[1])) {
      //push the split log to the letters array
          letters.push(log)
      } else {
    //otherwise
      //push original log to numbers array
          digits.push(logs[i])
      }
  }
  //sort the letter logs based on the second value
  //since they are split still, you can access them by logs[i][1]
  letters.sort(function(a, b) {
      for (var i = 1; i < a.length || i < b.length; i++) {
       if (a[i] < b[i]) {
           return -1;
       } else if (a[i] > b[i]) {
           return 1;
       }
      }
      if (a[0] < b[0]) {
          return -1;
      } else if (a[0] > b[0]) {
          return 1;
      }
      return 0;
  })
  for (var i = 0; i < letters.length; i++) {
      letters[i] = letters[i].join(' ');
  }
  //concat the arrays, letter logs first, then digit logs
  return letters.concat(digits);
};