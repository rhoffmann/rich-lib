var rl = {};

rl.filter = function (collection, callback) {
  var filtered = [];
  var i;
  for (i=0; i<collection.length; i++) {
    if (callback(collection[i])) {
      filtered.push(collection[i]);
    }
  }
  return filtered;
};

rl.makeFilter = function(collection, property) {
  return function(value) {
    return rl.filter(collection, function(item) {
      return item[property] === value;
    });
  };
};


rl.map = function (collection, callback) {
  var mapped = [];
  var i;
  for (i=0; i<collection.length; i++) {
    mapped.push(callback(collection[i]));
  }
  return mapped;
};

rl.reduce = function (collection, callback, initial) {
  var last = initial;
  var i;
  for (i = collection.length - 1; i >= 0; i--) {
    last = callback(last, collection[i]);
  }
  return last;
};

rl.groupBy = function (collection, callback) {
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


rl.mean = function(collection, property) {
	if (property) {
		collection = rl.map(collection, function(item) {
			return item[property];
		});
	}
	return reduce(collection, add, 0) / collection.length;
};


rl.add = function(a, b) {
	return a + b;
};


module.exports = rl;