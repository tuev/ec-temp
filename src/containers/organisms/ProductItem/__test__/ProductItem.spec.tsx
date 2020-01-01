/**
 *
 * Tests for ProductItem
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ProductItem from '..'

describe('App ProductItem', () => {
  it.skip('Test get default ProductItem no params ', () => {
    // test snapshot
    const wrapper = render(<ProductItem />)
    const { asFragment } = wrapper
    expect(wrapper).toMatchSnapshot()
    const fragment = asFragment()
    const buttonBuy = wrapper.getByTestId('product-item-info-buy-btn')
    const hideProductBut = wrapper.getByTestId('show-product-info-btn')
    fireEvent.click(buttonBuy)
    // todo: Fixing type for Jest Matcher
    expect(fragment).toMatchDiffSnapshot(asFragment())
    fireEvent.click(hideProductBut)
    expect(fragment).toMatchDiffSnapshot(asFragment())
    fireEvent.click(buttonBuy)
    expect(fragment).toMatchDiffSnapshot(asFragment())
  })
})
