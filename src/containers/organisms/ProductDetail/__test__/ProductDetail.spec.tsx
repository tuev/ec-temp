/**
 *
 * Tests for ProductDetail
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ProductDetail from '..'
import { itemInfo } from '../mock'

import useProductSelect, { reducer } from '../useProductSelect'
import { renderHook, act } from '@testing-library/react-hooks'

describe('App ProductDetail', () => {
  it('Test product select hooks', () => {
    const initValue = {
      color: itemInfo.colors[0],
      size: itemInfo.sizes[0],
      quantity: 1,
    }

    const { result } = renderHook(() => useProductSelect(initValue))
    expect(result.current[0]).toStrictEqual(initValue)

    act(() => result.current[1].color('red'))
    expect(result.current[0]).toStrictEqual({ ...initValue, color: 'red' })

    act(() => result.current[1].size('M'))
    expect(result.current[0]).toStrictEqual({
      ...initValue,
      color: 'red',
      size: 'M',
    })

    act(() => result.current[1].quantity(5))
    expect(result.current[0]).toStrictEqual({
      ...initValue,
      color: 'red',
      size: 'M',
      quantity: 5,
    })
  })

  it('Test default action on reducer of Product select hook', () => {
    const initValue = {
      color: itemInfo.colors[0],
      size: itemInfo.sizes[0],
      quantity: 1,
    }

    const newState = reducer(initValue, { type: 'tets', payload: 123 })
    expect(newState).toEqual(initValue)
  })

  it('Test get default ProductDetail no params ', () => {
    // test snapshot
    const wrapper = render(<ProductDetail />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default ProductDetail ', () => {
    // test snapshot
    const wrapper = render(<ProductDetail {...itemInfo} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default ProductDetail handle buy event', () => {
    let itemData = null
    // test snapshot
    const handleBuy = jest.fn().mockImplementation(buyItem => {
      itemData = buyItem
    })

    const wrapper = render(
      <ProductDetail {...itemInfo} handleBuy={handleBuy} />
    )
    expect(wrapper).toMatchSnapshot()

    const buyBtn = wrapper.getByTestId('product-detail-buy-btn')
    fireEvent.click(buyBtn)
    expect(handleBuy).toBeCalled()
    expect(itemData).toStrictEqual({
      color: [itemInfo.colors[0]],
      size: [itemInfo.sizes[0]],
      quantity: 1,
      id: itemInfo.id,
    })
  })

  it('Test get default ProductDetail no handle buy event', () => {
    // test snapshot
    const wrapper = render(<ProductDetail {...itemInfo} />)
    expect(wrapper).toMatchSnapshot()

    const buyBtn = wrapper.getByTestId('product-detail-buy-btn')
    fireEvent.click(buyBtn)
  })
})
