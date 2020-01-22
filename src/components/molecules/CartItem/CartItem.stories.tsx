/**
 *
 *  Stories for CartItem
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import CartItem from './CartItem'
import mockImg from './mock/img.png'

export default {
  component: CartItem,
  includeStories: ['basic'],
  title: 'CartItem',
}

export const basic = () => (
  <div>
    <CartItem
      // image={mockImg}
      size="M"
      quantity={1}
      name="Product name"
      id="123123"
      price={32}
    />
  </div>
)
