var exec = require('cordova/exec');

var AudioJoin = function (dstPath, srcPaths, successCallback, failCallback) {
  exec(successCallback, failCallback, 'AudioJoin', 'join', [{dstPath: dstPath, srcPaths: srcPaths}]);
};

module.exports = AudioJoin;
