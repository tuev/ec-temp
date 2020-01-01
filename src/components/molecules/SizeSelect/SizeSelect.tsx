import React, { FC, useCallback, useState, useEffect } from 'react'
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

const SizeSelect: FC<BasicSizeSelectProps> = props => {
  const { sizes = [], value, onChange, type = 'radio' } = props
  const [size, onSizeChange] = useState<SIZE_PARAMS>(sizes[0] || '')
  const handleSizeOnChange = useCallback(
    // todo: need to make typecheck for hof
    (sizeValue: SIZE_PARAMS) => () => onChange && onChange(sizeValue),
    [onChange]
  )

  const handleSelect = useCallback(
    (e: React.ChangeEvent<{ value: unknown }>) =>
      onSizeChange(e.target.value as SIZE_PARAMS),
    [onSizeChange]
  )

  useEffect(() => {
    // tslint:disable-next-line: no-unused-expression
    onChange && onChange(size)
  }, [size, onChange])

  return type === 'radio' ? (
    <SizeSelectWrapper>
      {sizes.map(sizeItem => (
        <SizeItemWrapper key={sizeItem}>
          <Button
            mx="4px"
            color={size === sizeItem ? 'secondary' : 'default'}
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
          data-testid="size-filter-select"
        >
          {sizes.map(sizeItem => (
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
