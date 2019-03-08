'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var combineUrlPath = exports.combineUrlPath = function combineUrlPath(prefix, filename) {
    if (!filename) {
        return '';
    }
    if (/^http/.test(filename)) {
        return filename;
    }

    var pre = prefix || '';
    var root = pre[pre.length - 1] === '/' ? pre : pre + '/';
    var filePath = filename[0] === '/' ? filename.substr(1) : filename;
    return '' + root + filePath;
};