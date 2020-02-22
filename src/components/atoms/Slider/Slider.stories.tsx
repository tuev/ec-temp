import React from 'react'
import { action } from '@storybook/addon-actions'
import Slider from './Slider'

export default {
  component: Slider,
  includeStories: ['basic', 'range', 'hasLabel'],
  title: 'AppSlider',
}

export const basic = () => (
  <div style={{ width: 200, padding: 32 }}>
    <Slider value={10} />
  </div>
)

export const range = () => (
  <div style={{ width: 200, padding: 32 }}>
    <Slider value={[10, 50]} />
  </div>
)

export const hasLabel = () => (
  <div style={{ width: 200, padding: 32 }}>
    <Slider value={10} showlabel={1} />

    <Slider value={[10, 50]} showlabel={1} />
  </div>
)
