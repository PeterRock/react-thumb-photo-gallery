import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { combineUrlPath } from './util'
import PhotoViewer from './PhotoViewer'
import ImageItem from './ImageItem'
import './index.css'

export default class PhotoGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showViewer: false,
            index: 0,
            imageSet: {},
        }
    }

    onViewerClose = () => {
        this.setState({ showViewer: false })
    }
    handleImageLoad = (src, w, h) => {
        const { srcPrefix } = this.props
        const { imageSet } = this.state
        imageSet[src] = { src: combineUrlPath(srcPrefix, src), w, h }
        this.setState({ imageSet })
    }
    handleImageClick = src => {
        const { photos } = this.props
        this.setState({
            showViewer: true,
            index: photos.indexOf(src),
        })
    }

    render() {
        const {
            photos,
            direction = 'row',
            size = 64,
            width,
            height,
            margin,
            srcPrefix,
            imagePlaceholder,
            itemClass,
            radius,
        } = this.props
        const { showViewer, index, imageSet } = this.state
        const cls = classNames({
            'rpg-photo-gallery': true,
            'rpg-row': direction === 'row',
            'rpg-column': direction === 'column',
        })

        // 利用负值边距移除溢出的高度和宽度
        const style = {}
        const innerStyle = {}
        if (margin) {
            style.margin = -margin / 2
            innerStyle.margin = margin / 2
        }

        // 计算当前图册数据
        const gallery = (photos || []).map(src => imageSet[src])

        return (
            <div className="rpg-photo-gallery-wrapper">
                <div className={cls} style={style}>
                    {(photos || []).map(src => (
                        <ImageItem
                            key={src}
                            src={src}
                            srcPrefix={srcPrefix}
                            size={size}
                            width={width}
                            height={height}
                            style={innerStyle}
                            onLoad={this.handleImageLoad}
                            onClick={this.handleImageClick}
                            imagePlaceholder={imagePlaceholder}
                            className={itemClass}
                            radius={radius}
                        />
                    ))}
                </div>
                {showViewer && (
                    <PhotoViewer
                        options={{ index }}
                        items={gallery}
                        onClose={this.onViewerClose}
                    />
                )}
            </div>
        )
    }
}

PhotoGallery.propTypes = {
    /**
     * 图片资源数组
     */
    photos: PropTypes.arrayOf(PropTypes.string),
    /**
     * 图片排列方向
     */
    direction: PropTypes.oneOf(['row', 'column']),
    /**
     * 图片缩略图大小
     */
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 图片缩略图间距
     */
    margin: PropTypes.number,
    /**
     * 图片资源地址前缀，常见于OSS
     */
    srcPrefix: PropTypes.string,
    /**
     * 默认占位图片
     */
    imagePlaceholder: PropTypes.string,
}
PhotoGallery.defaultProps = {
    photos: [],
    direction: 'row',
    size: 64,
    margin: undefined,
    srcPrefix: undefined,
    imagePlaceholder: undefined,
}
