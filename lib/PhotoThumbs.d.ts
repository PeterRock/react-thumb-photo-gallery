import React from 'react'

export interface PhotoThumbsProps {
    /**
     * 图片资源数组
     */
    photos: string
    /**
     * 图片排列方向
     */
    direction: 'row' | 'column'
    /**
     * 图片缩略图大小
     */
    size: string | number
    /**
     * 图片缩略图宽度
     */
    width: string | number
    /**
     * 图片缩略图高度
     */
    height: string | number
    /**
     * 图片缩略图间距
     */
    margin: number
    /**
     * 图片资源地址前缀，常见于OSS
     */
    srcPrefix: string
}

/**
 * Photo Gallery
 * @description
 * <PhotoThumbs photos=['src1', 'src2] size={120} margin={4} />
 */
export default class PhotoThumbs extends React.Component<
    PhotoThumbsProps,
    any
> {}
