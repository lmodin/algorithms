/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  // land is 0
  // water is .
  //create an island count variable
  var numberOfIslands = 0;
  // split the string so we can iterate through it and check for values
  let matrix = mapStr.split('\n');
  for (var i = 0; i < matrix.length; i++) {
    let newRow = matrix[i].split('');
    matrix[i] = newRow;
  }
  // iterate through the map
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      // check if the value is land
      if (matrix[i][j] === '0') {
        //if it's land, check if it's an island
        markIsland(i, j)
        numberOfIslands++;
      }
    }
  }

  function markIsland(row, col) {
    //check the directions one by one to see if they are water
    if(row >= matrix.length || row < 0 || col >= matrix[0].length || col < 0) {
      return;
    }
    if (matrix[row][col] !== '0') {
      return;
    }
    matrix[row][col] = '1';
    //check each direction around land
    //up
    markIsland(row + 1, col);
    //right
    markIsland(row, col + 1);
    //down
    markIsland(row - 1, col);
    //left
    markIsland(row, col - 1);
  }

  //return island count
  return numberOfIslands;
}