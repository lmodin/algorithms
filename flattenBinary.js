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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  // create a recursive function, takes in tree node, and current list
  function traverseTree (node, list) {
    // if the node doesn't have a left or a right
    if (!node.right && !node.left) {
      //return the node
      return node
    }
    // if the node has left:
    if (node.left) {
      //call recursor on left, setting that as the next value
       = traverseTree(node.left)
    }
      node.left = null
    // if the node has right:
    if (node.right) {
      //call recursor on right, setting that as the next value???
      node.next = traverseTree(node.right)
    }
  }
  //var list = new Listnode(root value, recursor(root))
  var list = traverseTree(root);
  //return list
  return list
};