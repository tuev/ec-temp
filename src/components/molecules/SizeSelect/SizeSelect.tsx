import React, { FC, useCallback } from 'react'
import { BasicSizeSelectProps } from './SizeSelect.types'
import Button from 'components/atoms/Button'
import { SizeSelectWrapper, SizeItemWrapper } from './SizeSelect.styled'

export const defaultMethod = () => true

const SizeSelect: FC<BasicSizeSelectProps> = props => {
  const { sizes = [], value, onChange = defaultMethod } = props
  const handleSizeOnChange = useCallback(
    (size: string) => () => onChange(size),
    [onChange]
  )

  return (
    <SizeSelectWrapper>
      {sizes.map(size => (
        <SizeItemWrapper key={size}>
          <Button
            mx="4px"
            color={value === size ? 'secondary' : 'default'}
            onClick={handleSizeOnChange(size)}
            size="small"
            data-testid={`size-filter-${size}`}
          >
            {size}
          </Button>
        </SizeItemWrapper>
      ))}
    </SizeSelectWrapper>
  )
}

export default SizeSelect
