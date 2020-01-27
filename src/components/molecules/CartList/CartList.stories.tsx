/**
 *
 *  Stories for CartList
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import CartList from './CartList'
import mockCartItems from './mock'

export default {
  component: CartList,
  includeStories: ['basic'],
  title: 'CartList',
}

export const basic = () => (
  <div>
    <CartList
      data={mockCartItems}
      onCartItemChange={items => console.log(items)}
    />
  </div>
)
