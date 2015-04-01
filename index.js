var math = require('./modules/math');
var filters = require('./modules/filters');
var collections = require('./modules/collections');

exports.filter = filters.filter;
exports.makeFilter = filters.makeFilter;
exports.map = collections.map;
exports.reduce = collections.reduce;
exports.groupBy = collections.groupBy;
exports.add = math.add;
