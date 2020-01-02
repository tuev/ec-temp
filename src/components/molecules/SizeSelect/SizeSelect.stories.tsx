import React, { useCallback, useState } from 'react'

import SizeSelect from './SizeSelect'
import { SIZE_PARAMS } from './SizeSelect.types'

export default {
  component: SizeSelect,
  includeStories: ['basic', 'example', 'dropdown'],
  title: 'SizeSelect',
}

export const basic = () => <SizeSelect sizes={['M', 'XL', 'L']} value={'L'} />

export const dropdown = () => (
  <SizeSelect sizes={['M', 'XL', 'L']} value={'L'} type="select" />
)

export const example = () => <SizeSelectExample />

const SizeSelectExample = () => {
  const sizes: SIZE_PARAMS[] = ['M', 'L', 'XL', 'XXL']
  const [size, toggleSize] = useState<SIZE_PARAMS>('L')
  const handleToggleSize = useCallback(sizeCode => toggleSize(sizeCode), [])

  return <SizeSelect sizes={sizes} value={size} onChange={handleToggleSize} />
}
