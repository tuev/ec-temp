import React, { FC, useCallback, useState, useEffect } from 'react'
import Radio from 'components/atoms/Radio'
import { ColorSelectType } from './ColorSelect.types'
import { get } from 'lodash'
import { ColorType } from 'theme/colors'

export const defaultMethod = (): boolean => true

const ColorSelect: FC<ColorSelectType> = props => {
  const { colors = [], value = 'blue' } = props
  const [colorValue, setColorValue] = useState<ColorType>(value)
  const onChange = get(props, 'onChange', defaultMethod)

  const handleOnchange = useCallback(
    color => (): unknown => setColorValue(color),
    [setColorValue]
  )

  useEffect((): void => {
    if (onChange) {
      onChange(colorValue)
    }
  }, [colorValue, onChange])

  useEffect(() => {
    setColorValue(value)
  }, [value])

  return (
    <div>
      {colors.map(color => (
        <Radio
          key={color}
          customcolor={color}
          variant="outer"
          checked={color === colorValue}
          onClick={handleOnchange(color)}
          data-testid={`color-filter-${color}`}
        />
      ))}
    </div>
  )
}

export default ColorSelect
