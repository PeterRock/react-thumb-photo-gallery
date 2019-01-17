import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoSwipe from 'photoswipe'
import DefaultConfig from 'photoswipe/dist/photoswipe-ui-default'

const defaultOptions = {
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
    indexIndicatorSep: ' / ',
}

class PhotoViewer extends PureComponent {
    constructor(props) {
        super(props)
        this.pswp = null
    }
    componentDidMount = () => {
        const { options, items } = this.props
        const merge = Object.assign({}, defaultOptions, options)
        this.pswp = new PhotoSwipe(this.pswpElement, DefaultConfig, items, merge)
        this.pswp.listen('close', this.handleCLose)
        this.pswp.init()
    }
    handleCLose = () => {
        const { onClose } = this.props
        this.pswp && this.pswp.close()
        onClose && onClose()
    }

    render() {
        return (
            <div
                ref={(node) => {
                    this.pswpElement = node
                }}
                className="pswp"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            >
                <div className="pswp__bg" />
                <div className="pswp__scroll-wrap">
                    <div className="pswp__container">
                        <div className="pswp__item" />
                        <div className="pswp__item" />
                        <div className="pswp__item" />
                    </div>
                    <div className="pswp__ui pswp__ui--hidden">
                        <div className="pswp__top-bar">
                            <div className="pswp__counter" />
                            <button
                                className="pswp__button pswp__button--close"
                                title="Close (Esc)"
                            />
                            <button className="pswp__button pswp__button--share" title="Share" />
                            <button
                                className="pswp__button pswp__button--fs"
                                title="Toggle fullscreen"
                            />
                            <button
                                className="pswp__button pswp__button--zoom"
                                title="Zoom in/out"
                            />
                            <div className="pswp__preloader">
                                <div className="pswp__preloader__icn">
                                    <div className="pswp__preloader__cut">
                                        <div className="pswp__preloader__donut" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div className="pswp__share-tooltip" />
                        </div>
                        <button
                            className="pswp__button pswp__button--arrow--left"
                            title="Previous (arrow left)"
                        />
                        <button
                            className="pswp__button pswp__button--arrow--right"
                            title="Next (arrow right)"
                        />
                        <div className="pswp__caption">
                            <div className="pswp__caption__center" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PhotoViewer.defaultProps = {
    onClose: undefined,
    options: defaultOptions,
}

PhotoViewer.propTypes = {
    onClose: PropTypes.func,
    options: PropTypes.shape({
        /**
         * 默认打开第几张，从0开始
         */
        index: PropTypes.number,
        /**
         * 控制栏尺寸，值在PC或1200+模式下有用
         * (Also refer to `parseVerticalMargin` event)
         */
        barsSize: PropTypes.shape({
            top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        }),
        /**
         * 鼠标移入多久后自动隐藏控制栏
         */
        timeToIdle: PropTypes.number,
        /**
         * 鼠标移走多久后自动隐藏任务栏
         */
        timeToIdleOutside: PropTypes.number,
        /**
         * 加载指示器显示完成后延迟多久(ms)
         */
        loadingIndicatorDelay: PropTypes.number,

        /**
         * 按钮-关闭
         */
        closeEl: PropTypes.bool,
        /**
         * 按钮-全屏
         */
        fullscreenEl: PropTypes.bool,
        /**
         * 按钮-缩放
         */
        zoomEl: PropTypes.bool,
        /**
         * 按钮-分享
         */
        shareEl: PropTypes.bool,
        /**
         * 元素-标题
         */
        captionEl: PropTypes.bool,
        /**
         * 元素-数量
         */
        counterEl: PropTypes.bool,
        /**
         * 元素-切换箭头
         */
        arrowEl: PropTypes.bool,
        /**
         * 元素-加载中图标
         */
        preloaderEl: PropTypes.bool,

        /**
         * 点击非图片区域关闭图片浏览器
         */
        tapToClose: PropTypes.bool,
        /**
         * 手机端点击屏幕时候隐藏工具栏
         */
        tapToToggleControls: PropTypes.bool,
        /**
         * 数量提示处的分隔符号
         */
        indexIndicatorSep: PropTypes.string,
        /**
         * 当图片不需要缩放时候，点击图片关闭浏览
         */
        clickToCloseNonZoomable: PropTypes.bool,
        /**
         * 分享按钮配置
         * @description 配置URL信息时候可以使用预置变量：
         * Available variables for URL:
         * {{url}}             - url to current page
         * {{text}}            - title
         * {{image_url}}       - encoded image url
         * {{raw_image_url}}   - raw image url
         */
        shareButtons: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            /**
                 * 显示文字
                 */
            label: PropTypes.string.isRequired,
            url: PropTypes.string,
            download: PropTypes.bool,
        })),
        /**
         * 处理分享时的图片地址
         * @param {object} shareButtonData - 分享按钮信息
         */
        getImageURLForShare: PropTypes.func,
        /**
         * 处理分享时的图片跳转页面地址
         * @param {object} shareButtonData - 分享按钮信息
         */
        getPageURLForShare: PropTypes.func,
        /**
         * 处理分享图片时的文本信息
         * @param {object} shareButtonData - 分享按钮信息
         */
        getTextForShare: PropTypes.func,
        /**
         * 构建标题的HTML Function builds caption markup
         * @param {object} item - slide object
         * @param {HTMLElement} captionEl - caption DOM element
         * @param {boolean} isFake - true when content is added to fake caption container
         */
        addCaptionHTMLFn: PropTypes.func,
        /**
         * 高级定制，配置自定义className
         */
        closeElClasses: PropTypes.arrayOf(PropTypes.string),
    }),
    items: PropTypes.arrayOf(PropTypes.shape({
        /**
             * 图片地址
             */
        src: PropTypes.string,
        /**
             * 图片宽度
             */
        w: PropTypes.number,
        /**
             * 图片高度
             */
        h: PropTypes.number,
        /**
             * 展位图小图，快速呈现，在原图加载成功后会覆盖在该图上方，默认会使用灰色矩形作为展位
             * 建议值在小图在其他地方已经加载过的情形下使用，可以利用浏览器的缓存，否则意义不大
             */
        msrc: PropTypes.string,
        /**
             * You may add more properties here and use them.
             * For example, demo gallery uses "author" property, which is used in the caption.
             */
        author: PropTypes.string,
        /**
             * 图片标题
             */
        title: PropTypes.string,
        /**
             * 与图片互斥， 自定义HTML内容，注意是HTMLElement类型才可以,
             */
        html: PropTypes.HTMLElement,
    }).isRequired).isRequired,
}
export default PhotoViewer
