var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (!list.head && !list.tail) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    } 
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target) {
    var searchNodes = function(node) {
      if (node.value === target) {
        return true;
      } else {
        if (node.next) {
          return searchNodes(node.next);
        }
      }
      return false;
    };
    return searchNodes(list.head);
  }; 

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
