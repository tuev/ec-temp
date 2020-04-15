import React from 'react'
import { action } from '@storybook/addon-actions'
import Input from './Input'

export default {
  component: Input,
  includeStories: ['basic'],
  title: 'AppInput',
}

export const basic = () => (
  <>
    <Input type="number" onChange={action('Number Input Clicked!!!')} />
  </>
)
