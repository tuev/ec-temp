/**
 *
 *  Stories for ProductFilter
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import ProductFilter from './ProductFilter'
import { IProductFilterValue } from './ProductFilter.types'
import Wrapper from 'components/atoms/Wrapper'
export default {
  component: ProductFilter,
  includeStories: ['basic'],
  title: 'ProductFilter',
}

export const basic = () => {
  const initState: IProductFilterValue = {
    color: ['green'],
    size: ['L'],
    price: [3, 4],
    brand: {
      brand1: {
        label: 'Brand 1',
        value: true,
      },
      brand2: {
        label: 'Brand 2',
        value: false,
      },
    },
  }
  return (
    <Wrapper width="30%">
      <ProductFilter value={initState} />
    </Wrapper>
  )
}
