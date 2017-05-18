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
  if (this.value === value) {
    return true;
  } else if (this.value < value && this.right instanceof BinarySearchTree) {
    return this.right.contains(value);
  } else if (this.value > value && this.left instanceof BinarySearchTree) {
    return this.left.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  
  if (this.left instanceof BinarySearchTree) {
    this.left.depthFirstLog(cb);
  }
  
  if (this.right instanceof BinarySearchTree) {
    this.right.depthFirstLog(cb);
  } 
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
