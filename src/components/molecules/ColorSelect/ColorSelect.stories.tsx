import React, { useCallback, useState } from 'react'

import ColorSelect from './ColorSelect'

export default {
  component: ColorSelect,
  includeStories: ['basic', 'example'],
  title: 'ColorSelect',
}

export const basic = () => (
  <ColorSelect colors={['blue', 'green', 'red', 'orange']} value="blue" />
)

export const example = () => <ColorSelectExample />

const ColorSelectExample = () => {
  const colors = ['blue', 'green', 'red', 'orange']
  const [color, toggleColor] = useState('blue')
  const handleToggleColor = useCallback(colorCode => toggleColor(colorCode), [])

  return (
    <ColorSelect colors={colors} value={color} onChange={handleToggleColor} />
  )
}
