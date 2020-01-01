/**
 *
 * Tests for ProductItemBuy
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ProductItemBuy from '..'

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

  it('Test buy product ProductItemBuy with size selection', () => {
    const props = {
      colors: ['green', 'red'],
      image: 'test',
      name: 'This is the name of the product',
      price: '200$',
      sizes: ['L', 'M', 'XS'],
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
    const selectSizeComp = wrapper.getByTestId('size-filter-select')
    fireEvent.click(selectSizeComp)
    // const sizeRadio = wrapper.getByTestId(`size-filter-M`)
    // fireEvent.click(sizeRadio)
    props.sizes.forEach(size => {
      fireEvent.click(selectSizeComp)
      const sizeRadio = wrapper.getByTestId(`size-filter-${size}`)
      fireEvent.click(sizeRadio)
      fireEvent.click(buyBtn)
      expect(info).toStrictEqual({
        id: props.id,
        color: 'green',
        size,
      })
    })
  })
})
