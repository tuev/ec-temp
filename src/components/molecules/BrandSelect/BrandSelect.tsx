import React, { useCallback, useState, useMemo, useEffect, FC } from 'react'
import Checkbox from 'components/atoms/Checkbox'
import { FormGroup, FormControlLabel } from '@material-ui/core'
import { keys, get } from 'lodash'

import {
  BrandSelectProps,
  IValueItem,
  GetBrandKey,
  GetBrandLabel,
} from './BrandSelect.types'

const getBrandKey: GetBrandKey = checkedValue => keys(checkedValue)

const getBrandLabel: GetBrandLabel = ({ key, values }) =>
  get(values, [key, 'label'])

export const BrandSelect: FC<BrandSelectProps> = (props: BrandSelectProps) => {
  const { values = {}, onChange } = props
  const [checkedValue, toggleCheck] = useState<IValueItem>({ ...values })
  const handleChange = useCallback(
    (name: string | number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      toggleCheck({
        ...checkedValue,
        [name]: { ...checkedValue[name], value: !!event.target.checked },
      })
    },
    [checkedValue]
  )

  useEffect(() => {
    if (onChange) {
      onChange(checkedValue)
    }
  }, [checkedValue, onChange])

  const valueLabels = useMemo<Array<string | number>>(
    () => getBrandKey(checkedValue),
    [checkedValue]
  )

  return (
    <FormGroup>
      {valueLabels.map(value => (
        <FormControlLabel
          key={value}
          control={
            <Checkbox
              checked={get(checkedValue, [value, 'value'])}
              onChange={handleChange(value)}
              value={value}
              data-testid={`brand-checkbox-${value}`}
            />
          }
          label={getBrandLabel({ key: value, values: checkedValue })}
          data-testid={`brand-label-${value}`}
        />
      ))}
    </FormGroup>
  )
}

export default BrandSelect
