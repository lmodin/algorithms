/**
 * Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.



Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

  var findDifference = (node) => {
      if(!node) {return 0}
      //level of the deepest left side
      let left = 1 + findDifference(node.left);
      let right = 1 + findDifference(node.right);
      if (Math.abs(left - right) > 1) {
          return Infinity;
      }
      return Math.max(left, right);
  }
  let difference = findDifference(root)
  if (difference==Infinity) {
      return false;
  } else {
      return true;
  }
};