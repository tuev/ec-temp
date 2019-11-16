import React from 'react'
import { action } from '@storybook/addon-actions'
import Checkbox from './Checkbox'

export default {
  component: Checkbox,
  title: 'AppCheckbox',
}

export const basic = () => (
  <>
    <Checkbox onChange={action('Checkbox Clicked!!!')}>Test</Checkbox>
    <Checkbox onChange={action('Checkbox Clicked!!!')} checked={true}>
      Test
    </Checkbox>
  </>
)
