"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("photoswipe/dist/photoswipe.css");

require("photoswipe/dist/default-skin/default-skin.css");

var _photoswipe2 = _interopRequireDefault(require("photoswipe"));

var _photoswipeUiDefault = _interopRequireDefault(require("photoswipe/dist/photoswipe-ui-default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultOptions = {
  index: 0,
  timeToIdle: 4000,
  timeToIdleOutside: 1000,
  closeEl: true,
  captionEl: true,
  fullscreenEl: true,
  zoomEl: true,
  shareEl: false,
  counterEl: true,
  arrowEl: true,
  preloaderEl: true,
  tapToClose: false,
  tapToToggleControls: true,
  clickToCloseNonZoomable: true,
  indexIndicatorSep: ' / '
};

var PhotoViewer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PhotoViewer, _PureComponent);

  function PhotoViewer(props) {
    var _this;

    _classCallCheck(this, PhotoViewer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PhotoViewer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          options = _this$props.options,
          items = _this$props.items;
      var merge = Object.assign({}, defaultOptions, options);
      _this.pswp = new _photoswipe2.default(_this.pswpElement, _photoswipeUiDefault.default, items, merge);

      _this.pswp.listen('close', _this.handleCLose);

      _this.pswp.init();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCLose", function () {
      var onClose = _this.props.onClose;
      _this.pswp && _this.pswp.close();
      onClose && onClose();
    });

    _this.pswp = null;
    return _this;
  }

  _createClass(PhotoViewer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        ref: function ref(node) {
          _this2.pswpElement = node;
        },
        className: "pswp",
        tabIndex: "-1",
        role: "dialog",
        "aria-hidden": "true"
      }, _react.default.createElement("div", {
        className: "pswp__bg"
      }), _react.default.createElement("div", {
        className: "pswp__scroll-wrap"
      }, _react.default.createElement("div", {
        className: "pswp__container"
      }, _react.default.createElement("div", {
        className: "pswp__item"
      }), _react.default.createElement("div", {
        className: "pswp__item"
      }), _react.default.createElement("div", {
        className: "pswp__item"
      })), _react.default.createElement("div", {
        className: "pswp__ui pswp__ui--hidden"
      }, _react.default.createElement("div", {
        className: "pswp__top-bar"
      }, _react.default.createElement("div", {
        className: "pswp__counter"
      }), _react.default.createElement("button", {
        className: "pswp__button pswp__button--close",
        title: "Close (Esc)"
      }), _react.default.createElement("button", {
        className: "pswp__button pswp__button--share",
        title: "Share"
      }), _react.default.createElement("button", {
        className: "pswp__button pswp__button--fs",
        title: "Toggle fullscreen"
      }), _react.default.createElement("button", {
        className: "pswp__button pswp__button--zoom",
        title: "Zoom in/out"
      }), _react.default.createElement("div", {
        className: "pswp__preloader"
      }, _react.default.createElement("div", {
        className: "pswp__preloader__icn"
      }, _react.default.createElement("div", {
        className: "pswp__preloader__cut"
      }, _react.default.createElement("div", {
        className: "pswp__preloader__donut"
      }))))), _react.default.createElement("div", {
        className: "pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
      }, _react.default.createElement("div", {
        className: "pswp__share-tooltip"
      })), _react.default.createElement("button", {
        className: "pswp__button pswp__button--arrow--left",
        title: "Previous (arrow left)"
      }), _react.default.createElement("button", {
        className: "pswp__button pswp__button--arrow--right",
        title: "Next (arrow right)"
      }), _react.default.createElement("div", {
        className: "pswp__caption"
      }, _react.default.createElement("div", {
        className: "pswp__caption__center"
      })))));
    }
  }]);

  return PhotoViewer;
}(_react.PureComponent);

PhotoViewer.defaultProps = {
  onClose: undefined,
  options: defaultOptions
};
PhotoViewer.propTypes = {
  onClose: _propTypes.default.func,
  options: _propTypes.default.shape({
    /**
     * 默认打开第几张，从0开始
     */
    index: _propTypes.default.number,

    /**
     * 控制栏尺寸，值在PC或1200+模式下有用
     * (Also refer to `parseVerticalMargin` event)
     */
    barsSize: _propTypes.default.shape({
      top: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
      bottom: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
    }),

    /**
     * 鼠标移入多久后自动隐藏控制栏
     */
    timeToIdle: _propTypes.default.number,

    /**
     * 鼠标移走多久后自动隐藏任务栏
     */
    timeToIdleOutside: _propTypes.default.number,

    /**
     * 加载指示器显示完成后延迟多久(ms)
     */
    loadingIndicatorDelay: _propTypes.default.number,

    /**
     * 按钮-关闭
     */
    closeEl: _propTypes.default.bool,

    /**
     * 按钮-全屏
     */
    fullscreenEl: _propTypes.default.bool,

    /**
     * 按钮-缩放
     */
    zoomEl: _propTypes.default.bool,

    /**
     * 按钮-分享
     */
    shareEl: _propTypes.default.bool,

    /**
     * 元素-标题
     */
    captionEl: _propTypes.default.bool,

    /**
     * 元素-数量
     */
    counterEl: _propTypes.default.bool,

    /**
     * 元素-切换箭头
     */
    arrowEl: _propTypes.default.bool,

    /**
     * 元素-加载中图标
     */
    preloaderEl: _propTypes.default.bool,

    /**
     * 点击非图片区域关闭图片浏览器
     */
    tapToClose: _propTypes.default.bool,

    /**
     * 手机端点击屏幕时候隐藏工具栏
     */
    tapToToggleControls: _propTypes.default.bool,

    /**
     * 数量提示处的分隔符号
     */
    indexIndicatorSep: _propTypes.default.string,

    /**
     * 当图片不需要缩放时候，点击图片关闭浏览
     */
    clickToCloseNonZoomable: _propTypes.default.bool,

    /**
     * 分享按钮配置
     * @description 配置URL信息时候可以使用预置变量：
     * Available variables for URL:
     * {{url}}             - url to current page
     * {{text}}            - title
     * {{image_url}}       - encoded image url
     * {{raw_image_url}}   - raw image url
     */
    shareButtons: _propTypes.default.arrayOf(_propTypes.default.shape({
      id: _propTypes.default.string.isRequired,

      /**
           * 显示文字
           */
      label: _propTypes.default.string.isRequired,
      url: _propTypes.default.string,
      download: _propTypes.default.bool
    })),

    /**
     * 处理分享时的图片地址
     * @param {object} shareButtonData - 分享按钮信息
     */
    getImageURLForShare: _propTypes.default.func,

    /**
     * 处理分享时的图片跳转页面地址
     * @param {object} shareButtonData - 分享按钮信息
     */
    getPageURLForShare: _propTypes.default.func,

    /**
     * 处理分享图片时的文本信息
     * @param {object} shareButtonData - 分享按钮信息
     */
    getTextForShare: _propTypes.default.func,

    /**
     * 构建标题的HTML Function builds caption markup
     * @param {object} item - slide object
     * @param {HTMLElement} captionEl - caption DOM element
     * @param {boolean} isFake - true when content is added to fake caption container
     */
    addCaptionHTMLFn: _propTypes.default.func,

    /**
     * 高级定制，配置自定义className
     */
    closeElClasses: _propTypes.default.arrayOf(_propTypes.default.string)
  }),
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
         * 图片地址
         */
    src: _propTypes.default.string,

    /**
         * 图片宽度
         */
    w: _propTypes.default.number,

    /**
         * 图片高度
         */
    h: _propTypes.default.number,

    /**
         * 展位图小图，快速呈现，在原图加载成功后会覆盖在该图上方，默认会使用灰色矩形作为展位
         * 建议值在小图在其他地方已经加载过的情形下使用，可以利用浏览器的缓存，否则意义不大
         */
    msrc: _propTypes.default.string,

    /**
         * You may add more properties here and use them.
         * For example, demo gallery uses "author" property, which is used in the caption.
         */
    author: _propTypes.default.string,

    /**
         * 图片标题
         */
    title: _propTypes.default.string,

    /**
         * 与图片互斥， 自定义HTML内容，注意是HTMLElement类型才可以,
         */
    html: _propTypes.default.HTMLElement
  }).isRequired).isRequired
};
var _default = PhotoViewer;
exports.default = _default;