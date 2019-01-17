'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('photoswipe/dist/photoswipe.css');

require('photoswipe/dist/default-skin/default-skin.css');

var _photoswipe = require('photoswipe');

var _photoswipe2 = _interopRequireDefault(_photoswipe);

var _photoswipeUiDefault = require('photoswipe/dist/photoswipe-ui-default');

var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var PhotoViewer = function (_PureComponent) {
    (0, _inherits3.default)(PhotoViewer, _PureComponent);

    function PhotoViewer(props) {
        (0, _classCallCheck3.default)(this, PhotoViewer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PhotoViewer.__proto__ || (0, _getPrototypeOf2.default)(PhotoViewer)).call(this, props));

        _this.componentDidMount = function () {
            var _this$props = _this.props,
                options = _this$props.options,
                items = _this$props.items;

            var merge = (0, _assign2.default)({}, defaultOptions, options);
            _this.pswp = new _photoswipe2.default(_this.pswpElement, _photoswipeUiDefault2.default, items, merge);
            _this.pswp.listen('close', _this.handleCLose);
            _this.pswp.init();
        };

        _this.handleCLose = function () {
            var onClose = _this.props.onClose;

            _this.pswp && _this.pswp.close();
            onClose && onClose();
        };

        _this.pswp = null;
        return _this;
    }

    (0, _createClass3.default)(PhotoViewer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                {
                    ref: function ref(node) {
                        _this2.pswpElement = node;
                    },
                    className: 'pswp',
                    tabIndex: '-1',
                    role: 'dialog',
                    'aria-hidden': 'true'
                },
                _react2.default.createElement('div', { className: 'pswp__bg' }),
                _react2.default.createElement(
                    'div',
                    { className: 'pswp__scroll-wrap' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pswp__container' },
                        _react2.default.createElement('div', { className: 'pswp__item' }),
                        _react2.default.createElement('div', { className: 'pswp__item' }),
                        _react2.default.createElement('div', { className: 'pswp__item' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'pswp__ui pswp__ui--hidden' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pswp__top-bar' },
                            _react2.default.createElement('div', { className: 'pswp__counter' }),
                            _react2.default.createElement('button', {
                                className: 'pswp__button pswp__button--close',
                                title: 'Close (Esc)'
                            }),
                            _react2.default.createElement('button', { className: 'pswp__button pswp__button--share', title: 'Share' }),
                            _react2.default.createElement('button', {
                                className: 'pswp__button pswp__button--fs',
                                title: 'Toggle fullscreen'
                            }),
                            _react2.default.createElement('button', {
                                className: 'pswp__button pswp__button--zoom',
                                title: 'Zoom in/out'
                            }),
                            _react2.default.createElement(
                                'div',
                                { className: 'pswp__preloader' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'pswp__preloader__icn' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'pswp__preloader__cut' },
                                        _react2.default.createElement('div', { className: 'pswp__preloader__donut' })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'pswp__share-modal pswp__share-modal--hidden pswp__single-tap' },
                            _react2.default.createElement('div', { className: 'pswp__share-tooltip' })
                        ),
                        _react2.default.createElement('button', {
                            className: 'pswp__button pswp__button--arrow--left',
                            title: 'Previous (arrow left)'
                        }),
                        _react2.default.createElement('button', {
                            className: 'pswp__button pswp__button--arrow--right',
                            title: 'Next (arrow right)'
                        }),
                        _react2.default.createElement(
                            'div',
                            { className: 'pswp__caption' },
                            _react2.default.createElement('div', { className: 'pswp__caption__center' })
                        )
                    )
                )
            );
        }
    }]);
    return PhotoViewer;
}(_react.PureComponent);

PhotoViewer.defaultProps = {
    onClose: undefined,
    options: defaultOptions
};

PhotoViewer.propTypes = {
    onClose: _propTypes2.default.func,
    options: _propTypes2.default.shape({
        /**
         * 默认打开第几张，从0开始
         */
        index: _propTypes2.default.number,
        /**
         * 控制栏尺寸，值在PC或1200+模式下有用
         * (Also refer to `parseVerticalMargin` event)
         */
        barsSize: _propTypes2.default.shape({
            top: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
            bottom: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
        }),
        /**
         * 鼠标移入多久后自动隐藏控制栏
         */
        timeToIdle: _propTypes2.default.number,
        /**
         * 鼠标移走多久后自动隐藏任务栏
         */
        timeToIdleOutside: _propTypes2.default.number,
        /**
         * 加载指示器显示完成后延迟多久(ms)
         */
        loadingIndicatorDelay: _propTypes2.default.number,

        /**
         * 按钮-关闭
         */
        closeEl: _propTypes2.default.bool,
        /**
         * 按钮-全屏
         */
        fullscreenEl: _propTypes2.default.bool,
        /**
         * 按钮-缩放
         */
        zoomEl: _propTypes2.default.bool,
        /**
         * 按钮-分享
         */
        shareEl: _propTypes2.default.bool,
        /**
         * 元素-标题
         */
        captionEl: _propTypes2.default.bool,
        /**
         * 元素-数量
         */
        counterEl: _propTypes2.default.bool,
        /**
         * 元素-切换箭头
         */
        arrowEl: _propTypes2.default.bool,
        /**
         * 元素-加载中图标
         */
        preloaderEl: _propTypes2.default.bool,

        /**
         * 点击非图片区域关闭图片浏览器
         */
        tapToClose: _propTypes2.default.bool,
        /**
         * 手机端点击屏幕时候隐藏工具栏
         */
        tapToToggleControls: _propTypes2.default.bool,
        /**
         * 数量提示处的分隔符号
         */
        indexIndicatorSep: _propTypes2.default.string,
        /**
         * 当图片不需要缩放时候，点击图片关闭浏览
         */
        clickToCloseNonZoomable: _propTypes2.default.bool,
        /**
         * 分享按钮配置
         * @description 配置URL信息时候可以使用预置变量：
         * Available variables for URL:
         * {{url}}             - url to current page
         * {{text}}            - title
         * {{image_url}}       - encoded image url
         * {{raw_image_url}}   - raw image url
         */
        shareButtons: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            id: _propTypes2.default.string.isRequired,
            /**
                 * 显示文字
                 */
            label: _propTypes2.default.string.isRequired,
            url: _propTypes2.default.string,
            download: _propTypes2.default.bool
        })),
        /**
         * 处理分享时的图片地址
         * @param {object} shareButtonData - 分享按钮信息
         */
        getImageURLForShare: _propTypes2.default.func,
        /**
         * 处理分享时的图片跳转页面地址
         * @param {object} shareButtonData - 分享按钮信息
         */
        getPageURLForShare: _propTypes2.default.func,
        /**
         * 处理分享图片时的文本信息
         * @param {object} shareButtonData - 分享按钮信息
         */
        getTextForShare: _propTypes2.default.func,
        /**
         * 构建标题的HTML Function builds caption markup
         * @param {object} item - slide object
         * @param {HTMLElement} captionEl - caption DOM element
         * @param {boolean} isFake - true when content is added to fake caption container
         */
        addCaptionHTMLFn: _propTypes2.default.func,
        /**
         * 高级定制，配置自定义className
         */
        closeElClasses: _propTypes2.default.arrayOf(_propTypes2.default.string)
    }),
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        /**
             * 图片地址
             */
        src: _propTypes2.default.string,
        /**
             * 图片宽度
             */
        w: _propTypes2.default.number,
        /**
             * 图片高度
             */
        h: _propTypes2.default.number,
        /**
             * 展位图小图，快速呈现，在原图加载成功后会覆盖在该图上方，默认会使用灰色矩形作为展位
             * 建议值在小图在其他地方已经加载过的情形下使用，可以利用浏览器的缓存，否则意义不大
             */
        msrc: _propTypes2.default.string,
        /**
             * You may add more properties here and use them.
             * For example, demo gallery uses "author" property, which is used in the caption.
             */
        author: _propTypes2.default.string,
        /**
             * 图片标题
             */
        title: _propTypes2.default.string,
        /**
             * 与图片互斥， 自定义HTML内容，注意是HTMLElement类型才可以,
             */
        html: _propTypes2.default.HTMLElement
    }).isRequired).isRequired
};
exports.default = PhotoViewer;