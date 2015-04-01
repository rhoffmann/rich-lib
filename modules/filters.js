exports.filter = filter;
exports.makeFilter = makeFilter;

function filter(collection, callback) {
  var filtered = [];
  var i;
  for (i=0; i<collection.length; i++) {
    if (callback(collection[i])) {
      filtered.push(collection[i]);
    }
  }
  return filtered;
}

function makeFilter(collection, property) {
  return function(value) {
    return filter(collection, function(item) {
      return item[property] === value;
    });
  };
}
