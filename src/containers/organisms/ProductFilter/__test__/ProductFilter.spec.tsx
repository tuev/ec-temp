/**
 *
 * Tests for ProductFilter
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ProductFilter from '..'
import { IProductFilterValue } from '../ProductFilter.types'
import useProductFilter, { reducer } from '../useProductFilter'
import { renderHook, act } from '@testing-library/react-hooks'

describe('App ProductFilter', () => {
  it('Test priceSelect Hook', () => {
    let initValue = {
      color: 'green',
      size: 'L',
      price: [3, 4],
      brand: {
        brand1: {
          label: 'Brand 1',
          value: true,
        },
        brand2: {
          label: 'Brand 2',
          value: false,
        },
      },
    }
    const handleFilterChange = value => (initValue = { ...initValue, ...value })
    const defaultValue = {
      color: 'black',
      size: 'S',
      price: [1, 95],
      brand: {
        brand1: {
          label: 'Brand 1',
          value: false,
        },
        brand2: {
          label: 'Brand 2',
          value: false,
        },
      },
    }
    const { result } = renderHook(() =>
      useProductFilter(initValue, handleFilterChange, defaultValue)
    )
    const newSize = 'M'
    const newColor = 'black'
    const newPrice = [5, 6]
    const newBrand = {
      brand1: {
        label: 'Brand 1',
        value: false,
      },
      brand2: {
        label: 'Brand 2',
        value: true,
      },
    }
    expect(result.current[0]).toEqual(initValue)
    act(() => {
      result.current[1].size(newSize)
      result.current[1].color(newColor)
      result.current[1].price(newPrice)
      result.current[1].brand(newBrand)
    })
    expect(initValue).toEqual({
      color: newColor,
      price: newPrice,
      size: newSize,
      brand: newBrand,
    })
    expect(result.current[0]).toEqual({
      color: newColor,
      price: newPrice,
      size: newSize,
      brand: newBrand,
    })

    act(() => {
      result.current[2]()
    })
    expect(result.current[0]).toEqual(defaultValue)
  })

  it('test default value of reducer', () => {
    const initValue = {
      color: 'green',
      size: 'L',
      price: [3, 4],
      brand: {
        brand1: {
          label: 'Brand 1',
          value: true,
        },
        brand2: {
          label: 'Brand 2',
          value: false,
        },
      },
    }
    const newState = reducer(initValue, { type: 'tets', payload: 123 })
    expect(newState).toEqual(initValue)
  })

  it('Test get default ProductFilter no handler function ', () => {
    const initState: IProductFilterValue = {
      color: 'black',
      size: 'S',
      price: [5, 95],
      brand: {
        brand1: {
          label: 'Brand 1',
          value: true,
        },
        brand2: {
          label: 'Brand 2',
          value: false,
        },
      },
    }

    // test snapshot
    const wrapper = render(<ProductFilter value={initState} />)
    expect(wrapper).toMatchSnapshot()
    const applyBtn = wrapper.getByTestId('product-filter-apply-btn')
    fireEvent.click(applyBtn)
  })

  it('Test get default ProductFilter no params ', () => {
    const initState: IProductFilterValue = {
      color: 'black',
      size: 'S',
      price: [5, 95],
      brand: {
        brand1: {
          label: 'Brand 1',
          value: true,
        },
        brand2: {
          label: 'Brand 2',
          value: false,
        },
      },
    }
    let productFilter = null
    const applyHandler = jest.fn().mockImplementation(productInfo => {
      productFilter = productInfo
    })

    // test snapshot
    const wrapper = render(
      <ProductFilter value={initState} applyFilter={applyHandler} />
    )
    expect(wrapper).toMatchSnapshot()
    const applyBtn = wrapper.getByTestId('product-filter-apply-btn')
    fireEvent.click(applyBtn)
    expect(productFilter).toEqual(initState)
    const label = wrapper.getByTestId(`brand-label-brand2`)
    fireEvent.click(label)
    fireEvent.click(applyBtn)
    expect(productFilter).toEqual({
      ...initState,
      brand: {
        ...initState.brand,
        brand2: { ...initState.brand.brand2, value: true },
      },
    })

    const clearBtn = wrapper.getByTestId('product-filter-clear-btn')
    fireEvent.click(clearBtn)
    fireEvent.click(applyBtn)
    expect(productFilter).toEqual(initState)
  })
})
