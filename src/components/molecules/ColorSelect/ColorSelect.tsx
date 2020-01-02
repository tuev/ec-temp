import React, { FC, useCallback } from 'react'
import Radio from 'components/atoms/Radio'
import { ColorSelectType } from './ColorSelect.types'
import { get } from 'lodash'

export const defaultMethod = (): boolean => true

const ColorSelect: FC<ColorSelectType> = props => {
  const { colors = [], value = 'blue' } = props
  const onChange = get(props, 'onChange', defaultMethod)

  const handleOnchange = useCallback(color => (): unknown => onChange(color), [
    onChange,
  ])

  return (
    <div>
      {colors.map(color => (
        <Radio
          key={color}
          customcolor={color}
          variant="outer"
          checked={color === value}
          onClick={handleOnchange(color)}
          data-testid={`color-filter-${color}`}
        />
      ))}
    </div>
  )
}

export default ColorSelect
