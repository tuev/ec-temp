import React, { FC, useCallback, useState, useEffect, useMemo } from 'react'
import Radio from 'components/atoms/Radio'
import { ColorSelectType } from './ColorSelect.types'
import { get } from 'lodash'
import { ColorType } from 'theme/colors'
import { FormControlLabel } from '@material-ui/core'

export const defaultMethod = (): boolean => true

const ColorSelect: FC<ColorSelectType> = (props) => {
  const { colors = [], value = [], multiselect = false } = props
  const [colorValue, setColorValue] = useState<ColorType[]>(value)
  const onChange = get(props, 'onChange', defaultMethod)
  const isAllColorChecked = useMemo(
    () => colors.every((color) => colorValue.includes(color), []),
    [colorValue, colors]
  )

  const handleOnchange = useCallback(
    (color) => (): void => {
      if (colorValue.includes(color)) {
        setColorValue(colorValue.filter((item) => item !== color))
      } else {
        multiselect
          ? setColorValue([...colorValue, color])
          : setColorValue([color])
      }
    },
    [colorValue, multiselect]
  )

  const handleSelectAll = useCallback(
    () => (isAllColorChecked ? setColorValue([]) : setColorValue(colors)),
    [colors, isAllColorChecked]
  )

  useEffect((): void => {
    onChange(colorValue)
  }, [colorValue, onChange])

  useEffect(() => {
    setColorValue(value)
  }, [value])

  return (
    <div>
      {multiselect ? (
        <FormControlLabel
          value="All"
          control={
            <Radio
              key={'All'}
              customcolor={'black'}
              variant="outer"
              checked={isAllColorChecked}
              onClick={handleSelectAll}
            />
          }
          label="All"
          labelPlacement="end"
          data-testid={`color-filter-all`}
        />
      ) : null}

      {colors.map((color) => (
        <Radio
          key={color}
          customcolor={color}
          variant="outer"
          checked={colorValue.includes(color)}
          onClick={handleOnchange(color)}
          data-testid={`color-filter-${color}`}
        />
      ))}
    </div>
  )
}

export default ColorSelect
