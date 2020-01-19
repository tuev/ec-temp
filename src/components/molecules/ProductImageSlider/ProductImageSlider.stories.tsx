/**
 *
 *  Stories for ProductImageSlider
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import ProductImageSlider from './ProductImageSlider'
import img1 from './mock/img2.jpg'
import img2 from './mock/img3.jpg'
import img3 from './mock/img4.jpg'
const imgMock: string[] = [img1, img2, img3]

export default {
  component: ProductImageSlider,
  includeStories: ['basic'],
  title: 'ProductImageSlider',
}

export const basic = () => (
  <div>
    <ProductImageSlider images={imgMock} />
  </div>
)
