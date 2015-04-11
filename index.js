
var lib = {};

lib.filter = function(collection, callback) {
  var filtered = [];
  var i;
  for (i=0; i<collection.length; i++) {
    if (callback(collection[i])) {
      filtered.push(collection[i]);
    }
  }
  return filtered;
};

lib.makeFilter = function(collection, property) {
  return function(value) {
    return lib.filter(collection, function(item) {
      return item[property] === value;
    });
  };
};

lib.map = function (collection, callback) {
  var mapped = [];
  var i;
  for (i=0; i<collection.length; i++) {
    mapped.push(callback(collection[i]));
  }
  return mapped;
};

lib.reduce = function (collection, callback, initial) {
  var last = initial;
  var i;
  for (i = collection.length - 1; i >= 0; i--) {
    last = callback(last, collection[i]);
  }
  return last;
};

lib.groupBy = function (collection, callback) {
  var grouped = {};
  var groupName;

  for (var i = 0; i < collection.length; i++) {
    groupName = callback(collection[i]);
    
    if(!grouped[groupName]) {
      grouped[groupName] = [];
    }

    grouped[groupName].push(collection[i]);
  }

  return grouped;
};

lib.mean = function(collection, property) {
	if (property) {
		collection = lib.pluck(collection, property);
	}
	return lib.reduce(collection, lib.add, 0) / collection.length;
};


lib.pluck = function(collection, property) {
  return lib.map(collection, function(item) {
    return item[property];
  });
};


lib.add = function(a, b) {
	return a + b;
};


module.exports = lib;