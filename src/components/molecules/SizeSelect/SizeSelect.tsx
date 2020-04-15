import React, { FC, useCallback, useState, useEffect, useMemo } from 'react'
import { BasicSizeSelectProps, SIZE_PARAMS } from './SizeSelect.types'
import Button from 'components/atoms/Button'
import {
  SizeSelectWrapper,
  SizeItemWrapper,
  SizeInputLabel,
  theme,
} from './SizeSelect.styled'
import { FormControl, Select, MenuItem } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import Typography from 'components/atoms/Typography'
import { isEqual } from 'lodash'

const SizeSelect: FC<BasicSizeSelectProps> = (props) => {
  const { sizes = [], value, onChange, type = 'radio', multipleselect } = props
  const [size, onSizeChange] = useState<SIZE_PARAMS[]>(value)

  const isAllSizeSelected = useMemo(
    () => sizes.every((item) => size.includes(item)),
    [sizes, size]
  )
  const handleSelectAll = useCallback(() => onSizeChange(sizes), [sizes])

  const handleSizeOnChange = useCallback(
    // todo: need to make typecheck for hof
    (sizeValue) => (): unknown => {
      if (multipleselect) {
        if (isEqual(size, [sizeValue])) return
        size.includes(sizeValue)
          ? onSizeChange(size.filter((item) => item !== sizeValue))
          : onSizeChange([...size, sizeValue])
      } else {
        onSizeChange([sizeValue] as SIZE_PARAMS[])
      }
    },
    [multipleselect, size]
  )

  const handleSelect = useCallback((e) => {
    onSizeChange([e.target.value] as SIZE_PARAMS[])
  }, [])

  useEffect(() => {
    if (onChange) {
      onChange(size)
    }
  }, [size, onChange])

  useEffect(() => {
    onSizeChange(value)
  }, [value])

  return type === 'radio' ? (
    <SizeSelectWrapper>
      {multipleselect ? (
        <SizeItemWrapper key="All">
          <Button
            mx="4px"
            onClick={handleSelectAll}
            size="small"
            data-testid={`size-filter-all`}
            color={isAllSizeSelected ? 'secondary' : 'default'}
          >
            All
          </Button>
        </SizeItemWrapper>
      ) : null}
      {sizes.map((sizeItem) => (
        <SizeItemWrapper key={sizeItem}>
          <Button
            mx="4px"
            color={size.includes(sizeItem) ? 'secondary' : 'default'}
            onClick={handleSizeOnChange(sizeItem)}
            size="small"
            data-testid={`size-filter-${sizeItem}`}
          >
            {sizeItem}
          </Button>
        </SizeItemWrapper>
      ))}
    </SizeSelectWrapper>
  ) : (
    <ThemeProvider theme={theme}>
      <FormControl variant="outlined">
        <SizeInputLabel>Size</SizeInputLabel>
        <Select
          value={size}
          onChange={handleSelect}
          inputProps={{
            'data-testid': 'size-filter-select',
          }}
        >
          {sizes.map((sizeItem) => (
            <MenuItem value={sizeItem} key={sizeItem}>
              <Typography data-testid={`size-filter-${sizeItem}`}>
                {sizeItem}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  )
}

export default SizeSelect
