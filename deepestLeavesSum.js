/**
 *
 * Given a binary tree, return the sum of values of its deepest leaves.
 *
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 */
var deepestLeavesSum = function(root) {
  var currentLevel = 0;
  var deepest = 0;
  var sumOfDeepest = root.val;

  let recurse = (node, level) => {
      level++;
      if (level > deepest) {
          deepest = level
          sumOfDeepest = node.val;
      } else if (level === deepest) {
          sumOfDeepest += node.val;
      }
      if (node.right) {recurse(node.right, level)}
      if (node.left) {recurse(node.left, level)}
  }
  if (root.right) {recurse(root.right, 0)}
  if (root.left) {recurse(root.left, 0)}
  return sumOfDeepest
};