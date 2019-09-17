"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PhotoViewer", {
  enumerable: true,
  get: function get() {
    return _PhotoViewer.default;
  }
});
exports.default = void 0;

var _PhotoGallery = _interopRequireDefault(require("./PhotoGallery"));

var _PhotoViewer = _interopRequireDefault(require("./PhotoViewer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _PhotoGallery.default;
exports.default = _default;