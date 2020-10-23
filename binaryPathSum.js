/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 */


/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 input: node, which represents the top of a tree
    integer, representing a target sum to be found in the tree
 output: boolean, representing whether or not the sum can be found in a path within the tree
 notes:
   binary tree => each node has a left and a right
   check path to each leaf and sum
 */
var hasPathSum = function(root, sum) {
  //create a boolean for whether it can be found, set to false
  var sumPathExists = false;
  //recursor that takes in node
  var findPathSums = (node, currSum) => {
      //if node is null, return 0;
      if (!node) {
          return;
      }
      //set variable equal to the result of value + recursor(left) + recursor(right)
      currSum += node.val;
      //if neither node.left and node.right exist, compare currSum to target
      if (!node.left && !node.right) {
          console.log('current sum: ',currSum,' and current node: ',node.val)
          if (currSum === sum) {
              //console.log('current sum: ',currSum,' and current node: ',node.val)
              sumPathExists = true;
          }
      } else {
          findPathSums(node.left, currSum);
          findPathSums(node.right, currSum);
      }

  }
  //call recursor on the root
  findPathSums(root, 0);
  //return the boolean
  return sumPathExists;


};