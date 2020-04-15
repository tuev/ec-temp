/**
 *
 * Tests for ProductItemInfo
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ProductItemInfo from '..'

describe('App ProductItemInfo', () => {
  it('Test get default ProductItemInfo no params ', () => {
    // test snapshot
    const wrapper = render(<ProductItemInfo price="20$" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default ProductItemInfo with name more than 30 chars ', () => {
    // test snapshot
    const name = 'this is name of the product with more than 30 characters'
    let isClick = false
    const handleClick = (e) => (isClick = true)
    const wrapper = render(
      <ProductItemInfo name={name} price="20$" handleBuy={handleClick} />
    )
    expect(wrapper).toMatchSnapshot()
    const nameItem = wrapper.getByTestId('product-item-info-name')
    const buttonBuy = wrapper.getByTestId('product-item-info-buy-btn')
    expect(nameItem).toHaveTextContent(`${name.slice(0, 29)}...`)
    fireEvent.click(buttonBuy)
    expect(isClick).toBe(true)
  })
})
