/**
 *
 * Tests for CartItem
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import CartItem from '..'

describe('App CartItem', () => {
  it('Test get default CartItem no params ', () => {
    const mockData = {
      id: '1234567890',
      quantity: 1,
      price: 23,
      name: 'prduct name',
      size: 'L',
    }

    let data = {
      id: mockData.id,
      quantity: mockData.quantity,
    }

    const handleRemoveCartItem = jest.fn().mockImplementation(id => {
      expect(id).toEqual(mockData.id)
    })

    const handleQuantityChange = jest.fn().mockImplementation(productInfo => {
      data = { ...data, ...productInfo }
    })

    // test snapshot
    const wrapper = render(
      <CartItem
        {...mockData}
        onRemoveCartItem={handleRemoveCartItem}
        onQuantityChange={handleQuantityChange}
      />
    )
    expect(wrapper).toMatchSnapshot()
    expect(handleQuantityChange).toHaveBeenCalled()

    const removeBtn = wrapper.getByTestId(`remove-cart-item-${mockData.id}-btn`)
    fireEvent.click(removeBtn)
    expect(handleRemoveCartItem).toHaveBeenCalled()
  })

  it('Test get default CartItem no handle props ', () => {
    const mockData = {
      id: '1234567890',
      quantity: 1,
      price: 23,
      name: 'prduct name',
      size: 'L',
    }

    // test snapshot
    const wrapper = render(<CartItem {...mockData} />)
    expect(wrapper).toMatchSnapshot()

    const removeBtn = wrapper.getByTestId(`remove-cart-item-${mockData.id}-btn`)
    fireEvent.click(removeBtn)
  })
})
