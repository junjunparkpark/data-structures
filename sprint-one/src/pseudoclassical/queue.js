var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.next = 0;
  this.last = 0;
  this.storage = {};
  
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function() {
  if (this.next === this.last) {
    return;
  }
  var temp = this.storage[this.next];
  delete this.storage[this.next];
  this.next++;
  return temp;
};

Queue.prototype.size = function() {
  return this.last - this.next;
};