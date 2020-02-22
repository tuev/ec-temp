/**
 *
 *  Stories for ProductList
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import ProductList from './ProductList'
import { data } from './mock/data.mock'
import { filterOptions } from './mock/filter.mock'

export default {
  component: ProductList,
  includeStories: ['basic'],
  title: 'ProductList',
}

export const basic = () => (
  <div>
    <ProductList items={data} filter={filterOptions} page={3} total={50} />
  </div>
)
