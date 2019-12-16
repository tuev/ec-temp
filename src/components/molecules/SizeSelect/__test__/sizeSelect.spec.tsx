import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import SizeSelect from '..'

// NOTE: https://codesandbox.io/s/pknk1v4mmx for testing style-components
// * using: data-testid on component and getByTestId return by 'render' of react-testing-library

describe('App size select', () => {
  it('Test get default size select no params ', () => {
    // test snapshot
    const wrapper = render(<SizeSelect />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default size select ', () => {
    const sizes = ['M', 'L', 'XS', 'XXL', 'XL']
    // test snapshot
    const wrapper = render(<SizeSelect sizes={sizes} value="XS" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default size filter with actions ', () => {
    let value = 'M'
    const sizes = ['M', 'L', 'XS', 'XXL', 'XL']
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
})
