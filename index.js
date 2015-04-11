exports.filter = function filter (collection, callback) {
  var filtered = [];
  var i;
  for (i=0; i<collection.length; i++) {
    if (callback(collection[i])) {
      filtered.push(collection[i]);
    }
  }
  return filtered;
};

exports.makeFilter = function makeFilter(collection, property) {
  return function(value) {
    return filter(collection, function(item) {
      return item[property] === value;
    });
  };
};


exports.map = function map (collection, callback) {
  var mapped = [];
  var i;
  for (i=0; i<collection.length; i++) {
    mapped.push(callback(collection[i]));
  }
  return mapped;
};

exports.reduce = function reduce (collection, callback, initial) {
  var last = initial;
  var i;
  for (i = collection.length - 1; i >= 0; i--) {
    last = callback(last, collection[i]);
  }
  return last;
};

exports.groupBy = function groupBy (collection, callback) {
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


exports.mean = function mean(collection, property) {
	if (property) {
		collection = map(collection, function(item) {
			return item[property];
		});
	}
	return reduce(collection, add, 0) / collection.length;
};


exports.add = function add(a, b) {
	return a + b;
};
