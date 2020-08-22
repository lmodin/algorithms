/*
Merge two sorted linked lists and return it as a new sorted list.
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  //create a current l1 to track position in first list
  //create a current l2, to track position in second list
  //create a traversal function, that takes in the node of l2
  let traversal = (node1, node2) => {
    //check if the first node is greater than node2 (ie, node2 needs to be inserted before first node1)
    if (node1.val > node2.val) {
      var nextNode = node1;
      var newNode = new ListNode(node2.val, nextNode);
      node1 = newNode
      //call traversal again if it exists
      if (node2.next) {
        traversal(node1, node2.next)
      } else {
        return
      }
      //otherwise, if node 1.next exists, and the next value is less than node 2 (ie, we need to continue down list before inserting)
    } else if (node1.next && node1.next.val < node2.val) {
      traversal (node1.next, node2)
    } else if (node1.val <= node2.val && (!node1.next || node1.next.val > node2.val)) {
      //condition where node2's value is between node1 and node1.next
      var nextNode = node1.next;
      var newNode = new ListNode(node2.val, nextNode);

      ////an error exists somewhere here!///
      node1.next = newNode;
      //call traversal again if next exsists for either node?
        if (!node2.next) {
          return;
        } else {
          node1.next = node2.next;
          return;
        }
      } else if (!node2.next) {
        return;
      } else {
        traversal(node1.next, node2.next)
      }
    }
    //continue until you reach the end of l2
  }

  //call the recursor traversal function
  traversal(l1, l2);
  //return edited list (l1)
  return l1
};



