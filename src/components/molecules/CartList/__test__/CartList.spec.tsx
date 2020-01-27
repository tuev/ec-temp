/**
 *
 * Tests for CartList
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import { isEqual } from 'lodash'
import CartList from '..'

import mock from '../mock'
import { renderHook, act } from '@testing-library/react-hooks'
import useCartListHandler, { reducer } from '../useCartListHandler'

describe('App CartList', () => {
  it('Test Cart list hook', () => {
    const changeHandler = jest.fn().mockImplementation(value => true)

    const { result } = renderHook(() => useCartListHandler(mock))
    expect(result.current[1]).toEqual(mock.length)
    expect(result.current[0]).toStrictEqual(mock)

    // change quantity
    act(() => result.current[2](mock[1].id)(5))
    expect(result.current[0][1].quantity).toEqual(5)

    // remove item
    act(() => result.current[3](mock[1].id)())
    expect(result.current[1]).toEqual(2)
  })

  it('Test default action in cartlist reducer ', () => {
    // test snapshot
    const wrapper = reducer(mock, { type: 'asdasd' })
    expect(wrapper).toStrictEqual(mock)
  })

  it('Test get default CartList with no data  ', () => {
    // test snapshot
    const wrapper = render(<CartList />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default CartList with mock data  ', () => {
    // test snapshot
    const wrapper = render(<CartList items={mock} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default CartList with event handler  ', () => {
    let result = []
    const onChangeHandler = jest.fn().mockImplementation(value => {
      result = value
    })

    const wrapper = render(
      <CartList items={mock} onCartItemChange={onChangeHandler} />
    )
    expect(wrapper).toMatchSnapshot()

    const increaseBtn = wrapper.getAllByTestId('increase-quantity-btn')
    const decreaseBtn = wrapper.getAllByTestId('decrease-quantity-btn')
    fireEvent.click(increaseBtn[0])
    expect(result[0].quantity).toEqual(mock[0].quantity + 1)

    fireEvent.click(decreaseBtn[1])
    expect(result[1].quantity).toEqual(mock[1].quantity - 1)

    const removeBtnItm0 = wrapper.getByTestId(
      `remove-cart-item-${mock[0].id}-btn`
    )
    fireEvent.click(removeBtnItm0)
    expect(onChangeHandler).toBeCalled()
    expect(result).toStrictEqual(
      mock
        .slice(-2)
        .map((item, idx) =>
          idx ? item : { ...item, quantity: mock[1].quantity - 1 }
        )
    )
  })
})
