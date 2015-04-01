exports.map = map;
exports.reduce = reduce;
exports.groupBy = groupBy;

function map(collection, callback) {
  var mapped = [];
  var i;
  for (i=0; i<collection.length; i++) {
    mapped.push(callback(collection[i]));
  }
  return mapped;
}

function reduce(collection, callback, initial) {
  var last = initial;
  var i;
  for (i = collection.length - 1; i >= 0; i--) {
    last = callback(last, collection[i]);
  }
  return last;
}

function groupBy(collection, callback) {
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
}