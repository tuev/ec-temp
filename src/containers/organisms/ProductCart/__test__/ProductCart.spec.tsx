/**
 *
 * Tests for ProductCart
 *
 */

import React from 'react'

import {
  render,
  fireEvent,
  act as action,
  wait,
  cleanup,
} from '@testing-library/react'
import ProductCart from '..'
import { renderHook, act } from '@testing-library/react-hooks'
import useProductCart from '../useProductCart'
import mock from 'components/molecules/CartList/mock'

describe('App ProductCart', () => {
  it('Test  product cart hook', () => {
    const { result: hookResult } = renderHook(() => useProductCart())

    expect(hookResult.current[0]).toEqual(false)

    act(() => hookResult.current[1].show())
    expect(hookResult.current[0]).toEqual(true)

    act(() => hookResult.current[1].hide())
    expect(hookResult.current[0]).toEqual(false)
  })

  it('Test get default ProductCart no params ', () => {
    // test snapshot
    const wrapper = render(<ProductCart />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default ProductCart no onBuy event ', () => {
    // test snapshot
    const wrapper = render(<ProductCart />)
    expect(wrapper).toMatchSnapshot()
    const cartIcon = wrapper.getByTestId('product-cart-icon')

    fireEvent.click(cartIcon)

    const buyBtn = wrapper.getByTestId('product-cart-checkout-btn')
    fireEvent.click(buyBtn)
  })

  it('Test get default ProductCart with mock data ', () => {
    // test snapshot
    const wrapper = render(<ProductCart data={mock} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default ProductCart with when open modal ', () => {
    // test snapshot
    const util = render(<ProductCart data={mock} />)
    expect(util).toMatchSnapshot()

    const cartIcon = util.getByTestId('product-cart-icon')

    fireEvent.click(cartIcon)

    const modalPopup = util.getByTestId('product-cart-popup')
    expect(modalPopup).toBeTruthy()
  })

  it('Test click buy btn', () => {
    const initValue = mock
    let result = null
    const onBuyHandler = jest.fn().mockImplementation(value => (result = value))

    const util = render(<ProductCart data={initValue} onBuy={onBuyHandler} />)
    expect(util).toMatchSnapshot()

    const cartIcon = util.getByTestId('product-cart-icon')

    fireEvent.click(cartIcon)

    const buyBtn = util.getByTestId('product-cart-checkout-btn')
    fireEvent.click(buyBtn)
    expect(onBuyHandler).toBeCalled()
    expect(result).toBe(mock)
  })

  it('Test change quantity of cart item', () => {
    const initValue = mock
    let result = null
    const onBuyHandler = jest.fn().mockImplementation(value => (result = value))

    const util = render(<ProductCart data={initValue} onBuy={onBuyHandler} />)
    expect(util).toMatchSnapshot()

    const cartIcon = util.getByTestId('product-cart-icon')

    fireEvent.click(cartIcon)

    const buyBtn = util.getByTestId('product-cart-checkout-btn')
    fireEvent.click(buyBtn)
    const increaseBtn = util.getAllByTestId('increase-quantity-btn')
    const decreaseBtn = util.getAllByTestId('decrease-quantity-btn')
    fireEvent.click(increaseBtn[0])
    fireEvent.click(buyBtn)
    expect(result[0].quantity).toEqual(mock[0].quantity + 1)

    fireEvent.click(decreaseBtn[0])
    fireEvent.click(buyBtn)
    expect(result[0].quantity).toEqual(mock[0].quantity)
  })

  it('Test remove cart item', () => {
    const initValue = mock
    let result = null
    const onBuyHandler = jest.fn().mockImplementation(value => (result = value))

    const util = render(<ProductCart data={initValue} onBuy={onBuyHandler} />)
    expect(util).toMatchSnapshot()

    const cartIcon = util.getByTestId('product-cart-icon')

    fireEvent.click(cartIcon)

    const buyBtn = util.getByTestId('product-cart-checkout-btn')
    fireEvent.click(buyBtn)
    const removeBtnItm0 = util.getByTestId(`remove-cart-item-${mock[0].id}-btn`)
    fireEvent.click(removeBtnItm0)
    fireEvent.click(buyBtn)
    expect(result).toStrictEqual(mock.slice(1))
  })

  it('Test close Btn', () => {
    const initValue = mock

    const util = render(<ProductCart data={initValue} />)
    expect(util).toMatchSnapshot()

    const cartIcon = util.getByTestId('product-cart-icon')

    fireEvent.click(cartIcon)

    const closeBtn = util.getByTestId('product-cart-close-btn')
    action(() => {
      fireEvent.click(closeBtn)
    })
    expect(util).toMatchSnapshot()
  })

  it('Test back to shop Btn', () => {
    const initValue = mock

    const util = render(<ProductCart data={initValue} />)
    expect(util).toMatchSnapshot()

    const cartIcon = util.getByTestId('product-cart-icon')

    fireEvent.click(cartIcon)

    const backBtn = util.getByTestId('product-cart-back-btn')
    action(() => {
      fireEvent.click(backBtn)
    })
    expect(util).toMatchSnapshot()
  })
})
