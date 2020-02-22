/**
 *
 *  Stories for ProductDetail
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import ProductDetail from './ProductDetail'
import { itemInfo } from './mock'

export default {
  component: ProductDetail,
  includeStories: ['basic'],
  title: 'ProductDetail',
}

export const basic = () => <ProductDetail {...itemInfo} />
