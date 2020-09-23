/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) {return 0}
  var deepest = 0;
  //create recursive function to reach bottom
  var findBottom = (node, level) => {
      level = level+1;
      //console.log('currently at level: ', level, ' with value: ', node.val)
      if (level > deepest) {
          deepest = level
      }
    //if there is no left or right
      if (node.left) {
          findBottom(node.left, level);
      }
      if (node.right) {
          findBottom(node.right, level);
      }
      return;
  }
  findBottom(root, 0);
  return deepest;
};