/**
 *
 * Tests for ProductItemBuy
 *
 */

import React from 'react'

import { render, fireEvent, waitForElement } from '@testing-library/react'
import ProductItemBuy from '..'
import UserEvent from '@testing-library/user-event'
import { last } from 'lodash'

describe('App ProductItemBuy', () => {
  it('Test get default ProductItemBuy no params ', () => {
    // test snapshot
    const wrapper = render(<ProductItemBuy />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default ProductItemBuy ', () => {
    const props = {
      colors: ['green'],
      image: 'test',
      name: 'This is the name of the product',
      price: '200$',
      sizes: ['M', 'L'],
      id: 'id prod',
    }
    // test snapshot
    const wrapper = render(<ProductItemBuy {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test buy product ProductItemBuy ', () => {
    const props = {
      colors: ['green', 'red'],
      image: 'test',
      name: 'This is the name of the product',
      price: '200$',
      sizes: ['L', 'M'],
      id: 'product id',
    }

    let info = null
    const handleBuy = productInfo => (info = productInfo)
    // test snapshot
    const wrapper = render(<ProductItemBuy {...props} handleBuy={handleBuy} />)
    expect(wrapper).toMatchSnapshot()
    const buyBtn = wrapper.getByTestId('product-item-buy-btn')

    fireEvent.click(buyBtn)
    expect(info).toStrictEqual({
      id: props.id,
      color: props.colors[0],
      size: props.sizes[0],
    })

    // change color
    const colorRadio = wrapper.getByTestId(`color-filter-red`)
    fireEvent.click(colorRadio)
    fireEvent.click(buyBtn)
    expect(info).toStrictEqual({
      id: props.id,
      color: 'red',
      size: props.sizes[0],
    })
  })

  it('Test buy product ProductItemBuy with color selection', () => {
    const props = {
      colors: ['green', 'red'],
      image: 'test',
      name: 'This is the name of the product',
      price: '200$',
      sizes: ['L', 'M'],
      id: 'product id',
    }

    let info = null
    const handleBuy = productInfo => (info = productInfo)
    // test snapshot
    const wrapper = render(<ProductItemBuy {...props} handleBuy={handleBuy} />)
    expect(wrapper).toMatchSnapshot()
    const buyBtn = wrapper.getByTestId('product-item-buy-btn')

    // change color
    const colorRadio = wrapper.getByTestId(`color-filter-red`)
    fireEvent.click(colorRadio)
    fireEvent.click(buyBtn)
    expect(info).toStrictEqual({
      id: props.id,
      color: 'red',
      size: props.sizes[0],
    })
  })

  it('Test buy product ProductItemBuy with size selection', async () => {
    const props = {
      colors: ['green', 'red'],
      image: 'test',
      name: 'This is the name of the product',
      price: '200$',
      sizes: ['L', 'M', 'XS'],
      id: 'product id',
    }

    let valueInfo = props.sizes[0]
    const onChange = info => (valueInfo = info)
    const changeHandler = jest.fn().mockImplementation(productInfo => {
      onChange(productInfo)
    })
    // test snapshot
    const wrapper = render(
      <ProductItemBuy {...props} handleBuy={changeHandler} />
    )
    expect(wrapper).toMatchSnapshot()
    const buyBtn = wrapper.getByTestId('product-item-buy-btn')

    fireEvent.click(buyBtn)
    expect(valueInfo).toStrictEqual({
      id: props.id,
      color: props.colors[0],
      size: props.sizes[0],
    })

    expect(changeHandler).toHaveBeenCalled()

    // change size
    const { getByTestId, container, getAllByText, getAllByRole } = wrapper

    const selectSizeComp = getByTestId('size-filter-select')
    const selectButton = getAllByRole('button')

    expect(selectButton).not.toBeNull()
    expect(selectSizeComp).not.toBeNull()

    for (const svalue of props.sizes) {
      UserEvent.click(selectButton[0])
      await waitForElement(() => getAllByText(svalue), {
        container,
      })
      const label = getAllByText(svalue)
      UserEvent.click(last(label))
      fireEvent.click(buyBtn)
      expect(valueInfo).toStrictEqual({
        id: props.id,
        color: 'green',
        size: svalue,
      })
    }
  })
})
