/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {

  var gameOption = ['R', 'P', 'S'];
  var gameOptions = [];

  for (var i = 0; i < gameOption.length; i++) {
    for (var j = 0; j < gameOption.length; j++) {
      for (var k = 0; k < gameOption.length; k++) {
        gameOptions.push([gameOption[i] + gameOption[j] + gameOption[k]]);
      }
    }
  }
  return gameOptions
}

//using a decision tree
//I want to use recursion here but my brain hurts too much so I'll try again tomorrow

var rockPaperScissorsTree = function() {
  //create an output array for all the possible combos
  var gameCombos = [];
  //create a decision tree class
  var DecisionTree = function(v) {
    this.value = v
    this.children = {};
  };
  //create a method for adding rock paper and scissors nodes to tree
  DecisionTree.prototype.addRPS = function() {
    this.children.r = new DecisionTree('r');
    this.children.p = new DecisionTree('p');
    this.children.s = new DecisionTree('s');

  }
  //create a main tree to start the game
  var tree = new DecisionTree('m');

  //at the start node, call an add rps function
  var createTree = function (tree) {
    tree.addRPS();
    //iterate through the children
    for (var key in tree.children) {
      //add nodes to all of them
      tree.children[key].addRPS();
      //I should use recursion here
      for (var keys in tree.children[key].children) {
        tree.children[key].children[keys].addRPS();
      }
    }
    return tree;
  }
  //call the create tree on tree
  var gameTree = createTree(tree)

  //traverse the decision tree, pushing each node to a game array
  var getCombos = function(tree) {
    //iterate across the children
    for (var gameOption1 in tree.children) {
      //I should use recursion here too
      for (var gameOption2 in tree.children[gameOption1].children) {
        for (var gameOption3 in tree.children[gameOption1].children[gameOption2].children) {
          gameCombos.push([gameOption1, gameOption2, gameOption3]);
        }
      }
    }

  }
  getCombos(gameTree);
  return gameCombos;
};
//Both should give an array with 27 options
var array = rockPaperScissors();
console.log(array[0])
rockPaperScissorsTree();