import React, { useCallback, useState } from 'react'

import SizeSelect from './SizeSelect'
import { SIZE_PARAMS } from './SizeSelect.types'

export default {
  component: SizeSelect,
  includeStories: ['basic', 'example', 'dropdown', 'exampleMultiple'],
  title: 'SizeSelect',
}

export const basic = () => <SizeSelect sizes={['M', 'XL', 'L']} value={['L']} />

export const dropdown = () => (
  <SizeSelect sizes={['M', 'XL', 'L']} value={['L']} type="select" />
)

export const example = () => <SizeSelectExample />

export const exampleMultiple = () => <SizeSelectMultipleExample />

const SizeSelectExample = () => {
  const sizes: SIZE_PARAMS[] = ['M', 'L', 'XL', 'XXL']
  // const [size, toggleSize] = useState<SIZE_PARAMS>('L')
  // const handleToggleSize = useCallback(sizeCode => toggleSize(sizeCode), [])
  const size: SIZE_PARAMS[] = ['L']
  return <SizeSelect sizes={sizes} value={size} />
}

const SizeSelectMultipleExample = () => {
  const sizes: SIZE_PARAMS[] = ['M', 'L', 'XL', 'XXL']
  // const [size, toggleSize] = useState<SIZE_PARAMS>('L')
  // const handleToggleSize = useCallback(sizeCode => toggleSize(sizeCode), [])
  const size: SIZE_PARAMS[] = ['L']
  return <SizeSelect sizes={sizes} value={size} multipleselect={true} />
}
