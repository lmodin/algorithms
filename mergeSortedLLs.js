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
  if (!l1 || !l2) {
      return l1 || l2;
  }
  let a = l1;
  let b = l2;
  let mergedList = null;
  if (a.val < b.val) {
    mergedList = a;
    a = a.next;
  } else {
    mergedList = b;
    b = b.next
  }
  let pointer = mergedList
  while (a && b) {
    if (a.val < b.val) {
      pointer.next = a;
      a = a.next;
    } else {
      pointer.next = b;
      b = b.next;
    }
    pointer = pointer.next;
  }

  if (a || b) {
    pointer.next = a || b;
  }

  return mergedList

};



