var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  
  
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right instanceof BinarySearchTree) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  } else if (value < this.value) {
    if (this.left instanceof BinarySearchTree) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
