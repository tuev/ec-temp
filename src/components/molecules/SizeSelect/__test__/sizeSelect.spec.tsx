import React from 'react'

import {
  render,
  fireEvent,
  getByTestId,
  queryAllByTestId,
} from '@testing-library/react'
import SizeSelect from '..'
import { SIZE_PARAMS } from '../SizeSelect.types'

// NOTE: https://codesandbox.io/s/pknk1v4mmx for testing style-components
// * using: data-testid on component and getByTestId return by 'render' of react-testing-library

describe('App size select', () => {
  it('Test get default size select no params ', () => {
    // test snapshot
    const wrapper = render(<SizeSelect />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default size select type select no params ', () => {
    // test snapshot
    const wrapper = render(<SizeSelect type="select" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default size select ', () => {
    const sizes: SIZE_PARAMS[] = ['M', 'L', 'XS', 'XXL', 'XL']
    // test snapshot
    const wrapper = render(<SizeSelect sizes={sizes} value="XS" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default size select type dropdown ', () => {
    const sizes: SIZE_PARAMS[] = ['M', 'L', 'XS', 'XXL', 'XL']
    // test snapshot
    const wrapper = render(
      <SizeSelect sizes={sizes} value="XS" type="select" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default size filter with actions ', () => {
    let value: SIZE_PARAMS = 'M'
    const sizes: SIZE_PARAMS[] = ['M', 'L', 'XS', 'XXL', 'XL']
    const onChange = size => (value = size)
    // test snapshot
    const wrapper = render(
      <SizeSelect sizes={sizes} value={value} onChange={onChange} />
    )

    expect(wrapper).toMatchSnapshot()

    sizes.forEach(size => {
      const sizeRadio = wrapper.getByTestId(`size-filter-${size}`)
      fireEvent.click(sizeRadio)
      expect(value).toBe(size)
    })
  })

  it('Test get default size filter select with actions ', () => {
    let value: SIZE_PARAMS = 'M'
    const sizes: SIZE_PARAMS[] = ['M', 'L', 'XS', 'XXL', 'XL']
    const onChange = size => (value = size)
    // test snapshot
    const wrapper = render(
      <SizeSelect
        sizes={sizes}
        value={value}
        onChange={onChange}
        type="select"
      />
    )

    expect(wrapper).toMatchSnapshot()
    const selectSizeComp = wrapper.getByTestId('size-filter-select')

    sizes.forEach(size => {
      fireEvent.click(selectSizeComp)
      const sizeRadio = wrapper.getByTestId(`size-filter-${size}`)
      fireEvent.click(sizeRadio)
      console.log(size, 'sizes')
      expect(value).toBe(size)
    })
  })
})
