var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.storage = {};
  instance.next = 0;
  instance.last = 0;
  Object.assign(instance, queueMethods);
  console.log(instance);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
};

queueMethods.dequeue = function() {
  if (this.next === this.last) {
    return;
  }
  var temp = this.storage[this.next];
  delete this.storage[this.next];
  this.next++;
  return temp;
};

queueMethods.size = function() {
  return this.last - this.next;
};

