var _ = require('lodash');

module.exports = function(arr, fn, cb) {

  if (!_.isArray(arr)) {
    return cb(new Error('A valid array is required'));
  }

  if (!_.isFunction(fn)) {
    return cb(new Error('A valid function is required'));
  }

  if (!_.isFunction(cb)) {
    return cb(new Error('A valid callback is required'));
  }

  var flag = false;

  for (var i=0; i<arr.length; i++) {
    if (flag) {
      return;
    }
    fn(arr[i], function (err, res) {
      if (err) {
        flag = true;
        return cb(err);
      }
    });
    if (i == arr.length - 1) {
      return cb();
    }
  }
};
