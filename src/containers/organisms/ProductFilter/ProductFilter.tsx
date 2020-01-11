/**
 *
 * ProductFilter
 *
 */

import React, { FC, useCallback, useMemo } from 'react'
import Wrapper from 'components/atoms/Wrapper'
import { COLOR } from 'theme/colors'
import Button from 'components/atoms/Button'
import ColorSelect from 'components/molecules/ColorSelect'
import Typography from 'components/atoms/Typography'
import SizeSelect from 'components/molecules/SizeSelect'
import PriceSelect from 'components/molecules/PriceSelect'
import BrandSelect from 'components/molecules/BrandSelect'

import { ProductFilterProps } from './ProductFilter.types'

import useProductFilter from './useProductFilter'
import { get } from 'lodash'

// todo: memorize filter options from api
import { filterOptions } from './mock/filterValue'

const ProductFilter: FC<ProductFilterProps> = (props: ProductFilterProps) => {
  const { value, onChange, applyFilter }: ProductFilterProps = props
  const defaultFilter = useMemo(
    () => ({
      brand: get(filterOptions, 'brand'),
      color: get(filterOptions, 'color.0', 'blue'),
      price: get(filterOptions, 'price', [5, 200]),
      size: get(filterOptions, 'size.0', 'M'),
    }),
    []
  )
  const [filterValue, onFilterChange, onFilterClear] = useProductFilter(
    value,
    onChange,
    defaultFilter
  )
  const handleApplyFilter = useCallback(() => {
    if (applyFilter) {
      applyFilter(filterValue)
    }
  }, [applyFilter, filterValue])
  return (
    <Wrapper padding="16px" border={`1px solid ${COLOR.black2}`}>
      <Wrapper mb="16px">
        <Wrapper mb="8px">
          <Typography customvariant="header3">Color</Typography>
        </Wrapper>
        <ColorSelect
          value={filterValue.color}
          colors={filterOptions.color}
          onChange={onFilterChange.color}
        />
      </Wrapper>
      <Wrapper mb="16px">
        <Wrapper mb="8px">
          <Typography customvariant="header3">Size</Typography>
        </Wrapper>
        <SizeSelect
          value={filterValue.size}
          sizes={filterOptions.size}
          onChange={onFilterChange.size}
        />
      </Wrapper>
      <Wrapper mb="16px">
        <Wrapper mb="8px">
          <Typography customvariant="header3">Price range</Typography>
        </Wrapper>
        <PriceSelect
          values={filterValue.price}
          onChange={onFilterChange.price}
        />
      </Wrapper>
      <Wrapper mb="16px">
        <Wrapper mb="8px">
          <Typography customvariant="header3">Brand</Typography>
        </Wrapper>
        <BrandSelect
          values={filterValue.brand}
          onChange={onFilterChange.brand}
        />
      </Wrapper>
      <Wrapper
        mb="16px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={['column', 'row']}
      >
        <Button
          size="small"
          onClick={handleApplyFilter}
          data-testid="product-filter-apply-btn"
        >
          Apply
        </Button>
        <Typography
          onClick={onFilterClear}
          animation={1}
          data-testid="product-filter-clear-btn"
        >
          Clear all
        </Typography>
      </Wrapper>
    </Wrapper>
  )
}

export default ProductFilter
