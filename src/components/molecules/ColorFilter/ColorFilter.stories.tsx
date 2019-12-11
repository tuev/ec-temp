import React, { useCallback, useState } from 'react'

import ColorFilter from './ColorFilter'

export default {
  component: ColorFilter,
  includeStories: ['basic', 'example'],
  title: 'ColorFilter',
}

export const basic = () => (
  <ColorFilter colors={['blue', 'green', 'red', 'orange']} value="blue" />
)

export const example = () => <ColorFilterExample />

const ColorFilterExample = () => {
  const colors = ['blue', 'green', 'red', 'orange']
  const [color, toggleColor] = useState('blue')
  const handleToggleColor = useCallback(colorCode => toggleColor(colorCode), [])

  return (
    <ColorFilter colors={colors} value={color} onChange={handleToggleColor} />
  )
}
