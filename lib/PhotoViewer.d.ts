import React from 'react'

export interface PhotoGalleryProps {
    /**
     * 图片资源数组
     */
    photos: string,
    /**
     * 图片排列方向
     */
    direction: 'row' | 'column',
    /**
     * 图片缩略图大小
     */
    size: string | number,
    /**
     * 图片缩略图间距
     */
    margin: number,
}

/**
 * Photo Gallery
 * @description
 * <PhotoGallery photos=['src1', 'src2] size={120} margin={4} />
 */
export default class PhotoGallery extends React.Component<PhotoGalleryProps, any> {}
