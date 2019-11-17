import React from 'react'
import { action } from '@storybook/addon-actions'
import Slider from './Slider'

export default {
  component: Slider,
  title: 'AppSlider',
}

export const basic = () => (
  <div style={{ width: 200, padding: 32 }}>
    <Slider onChange={action('Slider Clicked!!!')} value={10} />
  </div>
)

export const range = () => (
  <div style={{ width: 200, padding: 32 }}>
    <Slider onChange={action('Slider Clicked!!!')} value={[10, 50]} />
  </div>
)

export const hasLabel = () => (
  <div style={{ width: 200, padding: 32 }}>
    <Slider
      onChange={action('Slider Clicked!!!')}
      value={10}
      showLabel={true}
    />

    <Slider
      onChange={action('Slider Clicked!!!')}
      value={[10, 50]}
      showLabel={true}
    />
  </div>
)
