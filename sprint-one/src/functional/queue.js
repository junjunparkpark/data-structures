var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var next = 0;
  var last = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    if (next === last) {
      return;
    }
    var temp = storage[next];
    delete storage[next];
    next++;
    return temp;
  };

  someInstance.size = function() {
    return last - next;
  };

  return someInstance;
};
