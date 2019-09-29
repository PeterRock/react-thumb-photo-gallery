import React, { Component } from 'react'
import classNames from 'classnames'
import ImageItem from './ImageItem'
import './index.css'

/**
 * 只显示缩略图不处理预览组件
 */
export default class PhotoThumbs extends Component {
    render() {
        const {
            photos, direction = 'row', size = 64, width, height, margin, srcPrefix, imagePlaceholder, itemClass, radius,
        } = this.props
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
                            imagePlaceholder={imagePlaceholder}
                            radius={radius}
                            className={itemClass}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

PhotoThumbs.defaultProps = {
    photos: [],
    direction: 'row',
    size: 64,
    margin: undefined,
    srcPrefix: undefined,
    imagePlaceholder: undefined,
}
