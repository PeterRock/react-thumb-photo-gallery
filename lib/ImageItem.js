"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _util = require("./util");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImageItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageItem, _Component);

  function ImageItem(props) {
    var _this;

    _classCallCheck(this, ImageItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageItem).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onImageLoad", function (e) {
      var _this$props = _this.props,
          src = _this$props.src,
          onLoad = _this$props.onLoad;
      var height = e.target.naturalHeight;
      var width = e.target.naturalWidth;

      _this.setState({
        image: _this.props.src
      });

      typeof onLoad === 'function' && onLoad(src, width, height);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var _this$props2 = _this.props,
          src = _this$props2.src,
          onClick = _this$props2.onClick;
      typeof onClick === 'function' && onClick(src);
    });

    _this.imageHandler = new Image();

    _this.imageHandler.addEventListener('load', _this.onImageLoad);

    _this.state = {
      image: null
    };
    return _this;
  }

  _createClass(ImageItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          srcPrefix = _this$props3.srcPrefix,
          src = _this$props3.src;
      this.imageHandler.src = (0, _util.combineUrlPath)(srcPrefix, src);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.imageHandler.removeEventListener('load', this.onImageLoad);
      this.imageHandler = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          src = _this$props4.src,
          size = _this$props4.size,
          width = _this$props4.width,
          height = _this$props4.height,
          style = _this$props4.style,
          srcPrefix = _this$props4.srcPrefix;
      var image = this.state.image;

      var customStyle = _objectSpread({
        width: width || size,
        height: height || width || size
      }, style);

      if (!image) {
        return _react.default.createElement("div", {
          className: "rpg-image-item-wrapper",
          style: customStyle
        });
      }

      customStyle.backgroundImage = "url(".concat((0, _util.combineUrlPath)(srcPrefix, src), ")");
      return _react.default.createElement("div", {
        className: "rpg-image-item-wrapper",
        style: customStyle,
        onClick: this.handleClick
      });
    }
  }]);

  return ImageItem;
}(_react.Component);

exports.default = ImageItem;
ImageItem.propTypes = {
  /**
   * 图片资源
   */
  src: _propTypes.default.string,

  /**
   * 图片资源地址前缀，常见于OSS
   */
  srcPrefix: _propTypes.default.string,

  /**
   * 图片加载完成的触发事件： (src, width, height) => void
   */
  onLoad: _propTypes.default.func,

  /**
   * 点击图片时触发事件： (src) => void
   */
  onClick: _propTypes.default.func
};
ImageItem.defaultProps = {
  src: undefined,
  srcPrefix: undefined,
  onLoad: undefined,
  onClick: undefined
};