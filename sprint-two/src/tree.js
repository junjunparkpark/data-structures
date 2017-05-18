var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  var truth = false;

  for (let i = 0; i < this.children.length; i++) {
    truth = truth || this.children[i].contains(target);
  }

  return truth;
};



/*
 * Complexity: What is the time complexity of the above functions?

addChild = constant O(1)
contains = linear O(n)

 */

