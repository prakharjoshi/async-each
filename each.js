var fs = require('fs'),
  _ = require('lodash');

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

  var count = 0,
    flag = false;

  for (var i=0; i<arr.length; i++) {
    if (flag) {
      return;
    }
    count++;
    fn(arr[i], function (err, res) {
      if (err) {
        flag = true;
        return cb(err);
      }
    });
    if (count >= arr.length) {
      return;
    }
  }
};
