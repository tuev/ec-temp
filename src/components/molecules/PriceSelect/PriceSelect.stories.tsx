import React, { useCallback, useState } from 'react'
import { PriceValue, PriceHandleChange } from './PriceSelect.types'

import PriceSelect from './PriceSelect'

export default {
  component: PriceSelect,
  includeStories: ['basic', 'example'],
  title: 'PriceSelect',
}

export const basic = () => <PriceSelect values={[10, 20]} />

export const example = () => <PriceSelectExample />

const PriceSelectExample = () => {
  const prices: PriceValue = [10, 20]
  const [values, changeValue] = useState<PriceValue>(prices)
  const handleToggleColor = useCallback(value => changeValue(value), [])

  return (
    <PriceSelect
      values={values}
      onChange={handleToggleColor}
      min={5}
      max={100}
    />
  )
}
