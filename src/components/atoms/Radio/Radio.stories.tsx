import React from 'react'
import { action } from '@storybook/addon-actions'
import Radio from './Radio'

export default {
  component: Radio,
  title: 'AppRadio',
}

export const basic = () => (
  <>
    <Radio onChange={action('Radio Clicked!!!')}>Test</Radio>
    <Radio onChange={action('Radio Clicked!!!')} checked={true}>
      Test
    </Radio>
  </>
)
