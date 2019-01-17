import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class ImageItem extends Component {
    constructor(props) {
        super(props)
        this.imageHandler = new Image()
        this.imageHandler.addEventListener('load', this.onImageLoad)
        this.state = { image: null }
    }

    componentDidMount() {
        const { srcPrefix } = this.props
        const srcFix = srcPrefix ? srcPrefix : ''
        this.imageHandler.src = `${srcFix}${this.props.src}`
    }

    componentWillUnmount() {
        this.imageHandler.removeEventListener('load', this.onImageLoad)
        this.imageHandler = null
    }

    onImageLoad = e => {
        const { src, onLoad } = this.props
        const height = e.target.naturalHeight
        const width = e.target.naturalWidth

        this.setState({ image: this.props.src })
        typeof onLoad === 'function' && onLoad(src, width, height)
    }

    handleClick = () => {
        const { src, onClick } = this.props
        typeof onClick === 'function' && onClick(src)
    }

    render() {
        const { src, size, style, srcPrefix } = this.props
        const { image } = this.state

        const customStyle = {
            width: size,
            height: size,
            ...style,
        }

        if (!image) {
            return (
                <div className="rpg-image-item-wrapper" style={customStyle} />
            )
        }

        const srcFix = srcPrefix ? srcPrefix : ''
        customStyle.backgroundImage = `url(${srcFix}${src})`

        return (
            <div
                className="rpg-image-item-wrapper"
                style={customStyle}
                onClick={this.handleClick}
            />
        )
    }
}

ImageItem.propTypes = {
    /**
     * 图片资源
     */
    src: PropTypes.string,
    /**
     * 图片资源地址前缀，常见于OSS
     */
    srcPrefix: PropTypes.string,
    /**
     * 图片加载完成的触发事件： (src, width, height) => void
     */
    onLoad: PropTypes.func,
    /**
     * 点击图片时触发事件： (src) => void
     */
    onClick: PropTypes.func,
}
ImageItem.defaultProps = {
    src: undefined,
    srcPrefix: undefined,
    onLoad: undefined,
    onClick: undefined,
}
