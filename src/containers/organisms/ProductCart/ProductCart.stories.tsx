/**
 *
 *  Stories for ProductCart
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import ProductCart from './ProductCart'
import Wrapper from 'components/atoms/Wrapper'
import mock from 'components/molecules/CartList/mock'

export default {
  component: ProductCart,
  includeStories: ['basic'],
  title: 'ProductCart',
}

export const basic = () => (
  <Wrapper p="2rem">
    <ProductCart data={mock} />
  </Wrapper>
)
