var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [].concat(this._storage.get(index) || []);

  if (getIndexByKey(bucket, k) === -1) {
    bucket.push([k, v]);
  } else {
    bucket[getIndexByKey(bucket, k)] = [k, v];
  }

  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //console.log(bucket[getIndexByKey(bucket, k)][1]);
  var targetIndex = getIndexByKey(bucket, k);
  if (targetIndex === -1) {
    return undefined;
  } 
  return bucket[targetIndex][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log(this._storage.get(3));
  // console.log(this._storage.get(1));
  this._storage.each(function(bucket, i, storage) {
    if (i === index) {
      var temp = getIndexByKey(storage[i], k);
      if (temp === -1) {
        throw new Error('key not found in Hash Table');
      } else {
        delete storage[i][temp];
      }
      
    }
  });
  console.log(this._storage.get(3));
};

var getIndexByKey = function(arr, k) {
  var result = -1;
  arr.forEach(function(obj, index) {
    if (obj[0] === k ) {
      result = index;
    } 
  });
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?

insert = O(n)
retrieve = O(n)
remove = O(n^2)
getIndexByKey = O(n)

 */


