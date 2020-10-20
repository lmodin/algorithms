/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  //create a findLCA function that takes a node
  var findLCA = (node) => {
      //base case: if node is null, return false
      if (!node) {return false;}
      //if this root is p or q
      //console.log('node value is: ',node.val)
      if (node.val === p.val || node.val === q.val) {
          //and findLCA returns true
          //console.log('node is a target: ', node.val)
          if (findLCA(node.left) || findLCA(node.right)) {
              //this is the ancestor, return node
              //console.log('node is an ancestor: ', node.val)
              return node;
          } else {
          //and findLCA is false
              //return true
              return true;
          }
      }
      let left = findLCA(node.left);
      let right = findLCA(node.right);
      //console.log('left is: ',left,' right is: ',right)
      //if either are true, return true
      if (left === true && right === true) {return node;}
      if (left === true || right === true) {return true;}
      //if findlca on left is a node, return node
      else if (typeof left.val === 'number') {return left;}
      //if findlca on right is a node, return node
      else if (typeof right.val === 'number') {return right;}
      //if both are false, return false
      else {return false;}
  }
  //return findlca on root
  return findLCA(root)
};

/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”



Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [1,2], p = 1, q = 2
Output: 1


Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.*/