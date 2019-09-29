import React, { Component } from 'react'
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
        this.imagesEl = {}
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

    getThumbBoundsFn = (index) => {
        const src = (this.props.photos || [])[index]
        const ele = this.imagesEl[src]
        if (!ele) return undefined
        const rect = (ele.getBoundingClientRect()) || {}
        const pageYScroll = window.pageYOffset || document.documentElement.scrollTop
        return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width,
        }
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
            expandAnimate,
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
        const getThumbBoundsFn = expandAnimate ? this.getThumbBoundsFn : undefined

        return (
            <div className="rpg-photo-gallery-wrapper">
                <div className={cls} style={style}>
                    {(photos || []).map(src => (
                        <ImageItem
                            getItemRef={(ref) => { this.imagesEl[src] = ref }}
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
                        options={{ index, getThumbBoundsFn }}
                        items={gallery}
                        onClose={this.onViewerClose}
                    />
                )}
            </div>
        )
    }
}

PhotoGallery.defaultProps = {
    photos: [],
    direction: 'row',
    size: 64,
    margin: undefined,
    srcPrefix: undefined,
    imagePlaceholder: undefined,
}
