/**
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
Follow up:
Could you do get and put in O(1) time complexity?



Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4


Constraints:

1 <= capacity <= 3000
0 <= key <= 3000
0 <= value <= 104
At most 3 * 104 calls will be made to get and put.
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  //create an object to store the values in
  this.store = {};
  //create a variable for the capacity
  this.maxCap = capacity;
  //create a queue (?) to track the LRU
  this.cache = [];
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  //if key does not exist, return -1
  //console.log('I got a get for: ',key)
  if(!this.store[key]) {
      return -1;
  } else {
  //return the value at the key
      let index = this.cache.indexOf(key);
      //console.log('moving the value in cache from index: ', index)
      //put key at the beginning of the LRU array
      this.cache.splice(index, 1);
      this.cache.push(key);
      //console.log('cache: ',this.cache);
      return this.store[key];
  }
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  //if we're not at capacity yet
  //console.log('I got a put for: ', key)
  //console.log(this)
  if (this.store[key]) {
      this.store[key] = value;
      let index = this.cache.indexOf(key);
      this.cache.splice(index, 1);
      this.cache.push(key);
  } else if (this.cache.length < this.maxCap) {
      //create a new key set to the value
      this.store[key] = value;
      //set to the back of the LRU array
      this.cache.push(key);
  } else {
      //if we're at capacity and there is a LRU key, delete that key
      var lru = this.cache.shift();
      delete this.store[lru];
      //then save the key at value, and set at bottom of LRU stack
      //console.log('popping value off: ',lru)
      this.store[key] = value;
      this.cache.push(key);
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/