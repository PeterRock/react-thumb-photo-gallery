'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PhotoViewer = require('./PhotoViewer');

var _PhotoViewer2 = _interopRequireDefault(_PhotoViewer);

var _ImageItem = require('./ImageItem');

var _ImageItem2 = _interopRequireDefault(_ImageItem);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoGallery = function (_Component) {
    (0, _inherits3.default)(PhotoGallery, _Component);

    function PhotoGallery(props) {
        (0, _classCallCheck3.default)(this, PhotoGallery);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PhotoGallery.__proto__ || (0, _getPrototypeOf2.default)(PhotoGallery)).call(this, props));

        _this.onViewerClose = function () {
            _this.setState({ showViewer: false });
        };

        _this.handleImageLoad = function (src, w, h) {
            var imageSet = _this.state.imageSet;

            imageSet[src] = { src: src, w: w, h: h };
            _this.setState({ imageSet: imageSet });
        };

        _this.handleImageClick = function (src) {
            var photos = _this.props.photos;

            _this.setState({
                showViewer: true,
                index: photos.indexOf(src)
            });
        };

        _this.state = {
            showViewer: false,
            index: 0,
            imageSet: {}
        };
        return _this;
    }

    (0, _createClass3.default)(PhotoGallery, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                photos = _props.photos,
                _props$direction = _props.direction,
                direction = _props$direction === undefined ? 'row' : _props$direction,
                _props$size = _props.size,
                size = _props$size === undefined ? 64 : _props$size,
                margin = _props.margin,
                srcPrefix = _props.srcPrefix;
            var _state = this.state,
                showViewer = _state.showViewer,
                index = _state.index,
                imageSet = _state.imageSet;

            var cls = (0, _classnames2.default)({
                'rpg-photo-gallery': true,
                'rpg-row': direction === 'row',
                'rpg-column': direction === 'column'
            });

            // 利用负值边距移除溢出的高度和宽度
            var style = {};
            var innerStyle = {};
            if (margin) {
                style.margin = -margin / 2;
                innerStyle.margin = margin / 2;
            }

            // 计算当前图册数据
            var gallery = (photos || []).map(function (src) {
                return imageSet[src];
            });

            return _react2.default.createElement(
                'div',
                { className: 'rpg-photo-gallery-wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: cls, style: style },
                    (photos || []).map(function (src) {
                        return _react2.default.createElement(_ImageItem2.default, {
                            key: src,
                            src: src,
                            srcPrefix: srcPrefix,
                            size: size,
                            style: innerStyle,
                            onLoad: _this2.handleImageLoad,
                            onClick: _this2.handleImageClick
                        });
                    })
                ),
                showViewer && _react2.default.createElement(_PhotoViewer2.default, { options: { index: index }, items: gallery, onClose: this.onViewerClose })
            );
        }
    }]);
    return PhotoGallery;
}(_react.Component);

exports.default = PhotoGallery;


PhotoGallery.propTypes = {
    /**
     * 图片资源数组
     */
    photos: _propTypes2.default.arrayOf(_propTypes2.default.string),
    /**
     * 图片排列方向
     */
    direction: _propTypes2.default.oneOf(['row', 'column']),
    /**
     * 图片缩略图大小
     */
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * 图片缩略图间距
     */
    margin: _propTypes2.default.number,
    /**
    * 图片资源地址前缀，常见于OSS
    */
    srcPrefix: _propTypes2.default.string
};
PhotoGallery.defaultProps = {
    photos: [],
    direction: 'row',
    size: 64,
    margin: undefined,
    srcPrefix: undefined
};