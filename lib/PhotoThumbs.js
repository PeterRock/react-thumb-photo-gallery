"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ImageItem = _interopRequireDefault(require("./ImageItem"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 只显示缩略图不处理预览组件
 */
var PhotoThumbs =
/*#__PURE__*/
function (_Component) {
  _inherits(PhotoThumbs, _Component);

  function PhotoThumbs() {
    _classCallCheck(this, PhotoThumbs);

    return _possibleConstructorReturn(this, _getPrototypeOf(PhotoThumbs).apply(this, arguments));
  }

  _createClass(PhotoThumbs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          photos = _this$props.photos,
          _this$props$direction = _this$props.direction,
          direction = _this$props$direction === void 0 ? 'row' : _this$props$direction,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 64 : _this$props$size,
          width = _this$props.width,
          height = _this$props.height,
          margin = _this$props.margin,
          srcPrefix = _this$props.srcPrefix;
      var cls = (0, _classnames.default)({
        'rpg-photo-gallery': true,
        'rpg-row': direction === 'row',
        'rpg-column': direction === 'column'
      }); // 利用负值边距移除溢出的高度和宽度

      var style = {};
      var innerStyle = {};

      if (margin) {
        style.margin = -margin / 2;
        innerStyle.margin = margin / 2;
      }

      return _react.default.createElement("div", {
        className: "rpg-photo-gallery-wrapper"
      }, _react.default.createElement("div", {
        className: cls,
        style: style
      }, (photos || []).map(function (src) {
        return _react.default.createElement(_ImageItem.default, {
          key: src,
          src: src,
          srcPrefix: srcPrefix,
          size: size,
          width: width,
          height: height,
          style: innerStyle
        });
      })));
    }
  }]);

  return PhotoThumbs;
}(_react.Component);

exports.default = PhotoThumbs;
PhotoThumbs.propTypes = {
  /**
   * 图片资源数组
   */
  photos: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * 图片排列方向
   */
  direction: _propTypes.default.oneOf(['row', 'column']),

  /**
   * 图片缩略图大小
   */
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * 图片缩略图间距
   */
  margin: _propTypes.default.number,

  /**
  * 图片资源地址前缀，常见于OSS
  */
  srcPrefix: _propTypes.default.string
};
PhotoThumbs.defaultProps = {
  photos: [],
  direction: 'row',
  size: 64,
  margin: undefined,
  srcPrefix: undefined
};