//input: array of integers
//output: "Left" or "Right"output
//Edge: 0 nodes, or equal branches => return ""

//example: [3, 6, 2, 9, -1, 10] => "Left"
//example: [3] => ""
//example: [5, 3, 7, 1, -1, 8, 10] => "Right"

const solution = (arr) => {
  //handle empty arr edge case here!!!
  if (arr.length <= 1) {
      return "";
  }
  //General approach:
  //create a variable to track how many nodes are on left side
  var leftCount = 0;
  //create a variable to track how many nodes are on the right side
  var rightCount = 0;

  var currentIndex = 1;
  var leftNodes = 1;
  var rightNodes = 1;
  //use a while loop to go through the array
  while (currentIndex < arr.length) {
      let updated = false;
  //at each "level" there will be twice as many nodes on each side as the previous level
  //go through that number of values in the array, left first
    var leftNullCount = 0;
    var rightNullCount = 0;
    for (i = 0; i < leftNodes; i++) {
      //if we're at the end of array
      if(!arr[currentIndex]) {break;}
      if (arr[currentIndex] === -1) {
          leftCount++;
          leftNullCount++;}
      //otherwise, add to the count of left nodes
      else {leftCount++}
        updated = true;
      currentIndex++;
    }
    for (i = 0; i < rightNodes; i++) {
      //if we're at the end of array, break from while
      if(!arr[currentIndex]) {break;}
      //if it's a -1, increment null count
      if (arr[currentIndex] === -1) {
          rightCount++;
          rightNullCount++;}
      //otherwise, add to the count of right nodes
      else {rightCount++}
      //increment currentIndex
        updated = true;
      currentIndex++;
    }
    //As long as there aren't as many -1s and nodes, recalculate for the next level
    leftNodes = (leftNodes * 2) - (leftNullCount * 2)
    rightNodes = (rightNodes * 2) - (rightNullCount * 2)
      if(!updated) {currentIndex++;}
  }
  //if left is larger => return "Left"
  if (leftCount > rightCount) {return "Left";}
  //otherwise if right is larger => return "Right"
  else if (rightCount > leftCount) {return "Right";}
  //else => return ""
  else {return "";}
};