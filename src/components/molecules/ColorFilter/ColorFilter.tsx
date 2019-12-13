/* eslint-disable react/prop-types */
import React, { FC, useCallback } from 'react'
import Radio from 'components/atoms/Radio'
import { ColorFilterType } from './ColorFilter.types'
import { get } from 'lodash'

export const defaultMethod = () => true

const ColorFilter: FC<ColorFilterType> = props => {
  const { colors = [], value = 'blue' } = props
  const onChange = get(props, 'onChange', defaultMethod)

  const handleOnchange = useCallback(color => () => onChange(color), [onChange])

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

export default ColorFilter
