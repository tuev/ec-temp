import React from 'react'
import { action } from '@storybook/addon-actions'
import NumberInput from './NumberInput'

export default {
  component: NumberInput,
  includeStories: ['basic'],
  title: 'AppNumberInput',
}

export const basic = () => (
  <>
    <NumberInput onChange={action('NumberInput Clicked!!!')} />
  </>
)
