import React, { useCallback, useState } from 'react'

import SizeSelect from './SizeSelect'
import { SIZE_PARAMS } from './Size.type'

export default {
  component: SizeSelect,
  includeStories: ['basic', 'example'],
  title: 'SizeSelect',
}

export const basic = () => <SizeSelect size={['M', 'XL', 'L']} value={'L'} />

export const example = () => <SizeSelectExample />

const SizeSelectExample = () => {
  const sizes: SIZE_PARAMS = ['M', 'L', 'XL', 'XXL']
  const [size, toggleSize] = useState<SIZE_PARAMS>('L')
  const handleToggleSize = useCallback(sizeCode => toggleSize(sizeCode), [])

  return <SizeSelect sizes={sizes} value={size} onChange={handleToggleSize} />
}
