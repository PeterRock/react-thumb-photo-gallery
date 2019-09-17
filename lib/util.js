"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineUrlPath = void 0;

var combineUrlPath = function combineUrlPath(prefix, filename) {
  if (!filename) {
    return '';
  }

  if (/^http/.test(filename)) {
    return filename;
  }

  var pre = prefix || '';
  var root = pre[pre.length - 1] === '/' ? pre : "".concat(pre, "/");
  var filePath = filename[0] === '/' ? filename.substr(1) : filename;
  return "".concat(root).concat(filePath);
};

exports.combineUrlPath = combineUrlPath;