/*
Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9


Constraints:

The number of nodes in the given tree will be between 1 and 100.
Each node will have a unique integer value from 0 to 1000.

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
 * @return {TreeNode}
 i: binary tree
 o: tree w/ only right nodes
 c: n/a
 e: tree is empty or has no children, already in order
 */
var increasingBST = function(root) {
  //create a new tree node
  var allRightTree = new TreeNode(null);
  //create a pointer to that tree node
  var pointer = allRightTree;
  //create a recursor that traverses the tree
  var traverser = (node) => {
      //if there is a left node, call recursor on left node
      if (node.left) {traverser(node.left)}
      //if the pointer does not have a right node, create a right node with current node's value
      if (!pointer.right) {pointer.right = new TreeNode(node.val)}
      //move the pointer to the new node
      pointer = pointer.right;
      //if there is a right node, call recursor on the right node
      if (node.right) {traverser(node.right)}
  }
  //initiate the recursor on the root
  traverser(root)
  //return the node created above
  return allRightTree.right;

};

/*
Time complexity:
we must traverse through every node, so this is linear time - I can't think of a way to change that

Space complexity:
this is linear space as well, we are more or less creating a copy of the tree but in a different format
*/