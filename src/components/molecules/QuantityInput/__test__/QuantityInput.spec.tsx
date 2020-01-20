/**
 *
 * Tests for QuantityInput
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import QuantityInput from '..'

import { renderHook, act } from '@testing-library/react-hooks'
import useQuantity from '../useQuantity'

describe('App QuantityInput', () => {
  it('Test get default QuantityInput no params ', () => {
    // test snapshot
    const initValue = 1
    let quantityValue = initValue
    const changeValue = 4
    const handleQuantityChange = jest
      .fn()
      .mockImplementation(value => (quantityValue = value))

    const { result } = renderHook(() =>
      useQuantity(initValue, handleQuantityChange)
    )

    expect(result.current[0]).toEqual(quantityValue)
    act(() => result.current[1]({ target: { value: changeValue } }))
    expect(quantityValue).toEqual(changeValue)
    act(() => result.current[2].increase())
    expect(quantityValue).toEqual(changeValue + 1)

    act(() => result.current[2].decrease())
    expect(quantityValue).toEqual(changeValue)
  })

  it('Test get default QuantityInput no params ', () => {
    // test snapshot
    const wrapper = render(<QuantityInput />)
    expect(wrapper).toMatchSnapshot()
  })
})
