/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


// given a LL head
// find the middle node
// if even number, return 2nd middle node

//input: head node
//output: middle node
//constraints:
//edge cases: if there's only one node, return that node
//  if an even number of nodes, return middle + 1;
//  if given null, return null;

// recurses through the linked list, time and space complexities are linear
//create a function that takes in the head node
let middleNode = (head) => {
  //create an array to which we'll push the node//s
  let list = [];
   //create a recursor function that takes in a node
  let recursor = (node) => {
    //checks if that node has a next value of null
    list.push(node)
    if (node.next) {recursor(node.next)};
  }
  //0, 1, 2, 3, 4, 5
  //call the recursor on head
  recursor(head);
  //take the length of the array, find the middle
  var middle = Math.floor(list.length / 2);
  //return array[midddle], which should be the whole node
  return list[middle];
}

//keeps track of a trailing and leading pointer
let findMiddle = (head) => {
  var counter = 0;
  var middleIndex = 0;
  //trailing header
  var middle = head;
  //leading header
  var node = head;
  while (node.next) {
    counter++;
    // if the middle index should change based on counter
    if (Math.floor(counter / 2) !== middleIndex) {
      //update the middle Index  => this should never incrememnt by more than 1, as the leading pointer grows twice as quickly
      middleIndex = Math.floor(counter / 2);
      //move middle to the next value
      middle = middle.next;
    }
    node = node.next;
  }
  return middle;
}
