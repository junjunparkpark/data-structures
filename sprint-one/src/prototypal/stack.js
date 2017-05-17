var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.length = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {};


stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if (this.length === 0) {
    return;
  }
  var temp = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return temp;
};

stackMethods.size = function() {
  return this.length;
};

