import React from 'react'

interface BarsSizeProps {
    top: number | string
    bottom: number | string
}
interface ShareButtonsProps {
    id: string
    /**
     * 显示文字
     */
    label: string
    url: string
    download: boolean
}

interface OptionProps {
    /**
     * 默认打开第几张，从0开始
     */
    index: number
    /**
     * 控制栏尺寸，值在PC或1200+模式下有用
     * (Also refer to `parseVerticalMargin` event)
     */
    barsSize: BarsSizeProps
    /**
     * 鼠标移入多久后自动隐藏控制栏
     */
    timeToIdle: number
    /**
     * 鼠标移走多久后自动隐藏任务栏
     */
    timeToIdleOutside: number
    /**
     * 加载指示器显示完成后延迟多久(ms)
     */
    loadingIndicatorDelay: number

    /**
     * 按钮-关闭
     */
    closeEl: boolean
    /**
     * 按钮-全屏
     */
    fullscreenEl: boolean
    /**
     * 按钮-缩放
     */
    zoomEl: boolean
    /**
     * 按钮-分享
     */
    shareEl: boolean
    /**
     * 元素-标题
     */
    captionEl: boolean
    /**
     * 元素-数量
     */
    counterEl: boolean
    /**
     * 元素-切换箭头
     */
    arrowEl: boolean
    /**
     * 元素-加载中图标
     */
    preloaderEl: boolean

    /**
     * 点击非图片区域关闭图片浏览器
     */
    tapToClose: boolean
    /**
     * 手机端点击屏幕时候隐藏工具栏
     */
    tapToToggleControls: boolean
    /**
     * 数量提示处的分隔符号
     */
    indexIndicatorSep: string
    /**
     * 当图片不需要缩放时候，点击图片关闭浏览
     */
    clickToCloseNonZoomable: boolean
    /**
     * 分享按钮配置
     * @description 配置URL信息时候可以使用预置变量：
     * Available variables for URL:
     * {{url}}             - url to current page
     * {{text}}            - title
     * {{image_url}}       - encoded image url
     * {{raw_image_url}}   - raw image url
     */
    shareButtons: ShareButtonsProps
    /**
     * 处理分享时的图片地址
     * @param {object} shareButtonData - 分享按钮信息
     */
    getImageURLForShare: Function
    /**
     * 处理分享时的图片跳转页面地址
     * @param {object} shareButtonData - 分享按钮信息
     */
    getPageURLForShare: Function
    /**
     * 处理分享图片时的文本信息
     * @param {object} shareButtonData - 分享按钮信息
     */
    getTextForShare: Function
    /**
     * 构建标题的HTML Function builds caption markup
     * @param {object} item - slide object
     * @param {HTMLElement} captionEl - caption DOM element
     * @param {booleanean} isFake - true when content is added to fake caption container
     */
    addCaptionHTMLFn: Function
    /**
     * 高级定制，配置自定义className
     */
    closeElClasses: [string]
}

interface ItemProps {
    /**
     * 图片地址
     */
    src: string
    /**
     * 图片宽度
     */
    w: number
    /**
     * 图片高度
     */
    h: number
    /**
     * 展位图小图，快速呈现，在原图加载成功后会覆盖在该图上方，默认会使用灰色矩形作为展位
     * 建议值在小图在其他地方已经加载过的情形下使用，可以利用浏览器的缓存，否则意义不大
     */
    msrc: string
    /**
     * You may add more properties here and use them.
     * For example, demo gallery uses "author" property, which is used in the caption.
     */
    author: string
    /**
     * 图片标题
     */
    title: string
    /**
     * 与图片互斥， 自定义HTML内容，注意是HTMLElement类型才可以,
     */
    html: HTMLElement
}

export interface PhotoViewerProps {
    /**
     * 图片资源数组
     */
    onClose: Function
    /**
     * 图片排列方向
     */
    options: OptionProps
    /**
     * 图片缩略图大小
     */
    items: ItemProps
}

/**
 * Photo Viewer
 * @description
 * <PhotoViewer options={{ index: 1 }} items={['src1', 'src2']} onClose={this.onViewerClose} />
 */
export default class PhotoViewer extends React.Component<
    PhotoViewerProps,
    any
> {}
