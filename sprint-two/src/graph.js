

// Instantiate a new graph
var Graph = function() {
  this.Nodes = [];
  this.Edges = [];
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.Nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.Nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    this.Nodes.splice(this.Nodes.indexOf(node), 1);
  }

  for (let i = 0; i < this.Edges.length; i++) {
    if (this.Edges[i][0] === node || this.Edges[i][1] === node) {
      this.Edges.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var temp = [fromNode, toNode].sort();
  for (let i = 0; i < this.Edges.length; i++) {
    if (temp[0] === this.Edges[i][0] && temp[1] === this.Edges[i][1]) {
      return true;
    }
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.Edges.push([fromNode, toNode].sort());
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var temp = [fromNode, toNode].sort();
  for (let i = 0; i < this.Edges.length; i++) {
    if (temp[0] === this.Edges[i][0] && temp[1] === this.Edges[i][1]) {
      this.Edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.Nodes.forEach(cb);
};

var Node = function (value) {
  var node = {};
  node.value = value;
  node.connections = {};
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


