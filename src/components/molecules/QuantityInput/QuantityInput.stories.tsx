/**
 *
 *  Stories for QuantityInput
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import QuantityInput from './QuantityInput'

export default {
  component: QuantityInput,
  includeStories: ['basic'],
  title: 'QuantityInput',
}

export const basic = () => (
  <div>
    <QuantityInput />
  </div>
)
