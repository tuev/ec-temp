import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ColorFilter from '..'
import { defaultMethod } from '../ColorFilter'

// NOTE: https://codesandbox.io/s/pknk1v4mmx for testing style-components
// * using: data-testid on component and getByTestId return by 'render' of react-testing-library

describe('App color filter', () => {
  it('Test default onChange method', () => {
    const value = defaultMethod()
    expect(value).toBe(true)
  })

  it('Test get default color filter no params ', () => {
    // test snapshot
    const wrapper = render(<ColorFilter />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default color filter ', () => {
    const colors = ['blue', 'red', 'green', 'yellow', 'black']
    // test snapshot
    const wrapper = render(<ColorFilter colors={colors} value="green" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default color filter with actions ', () => {
    let value = 'blue'
    const colors = ['blue', 'red', 'green', 'yellow', 'black']
    const onChange = color => (value = color)
    // test snapshot
    const wrapper = render(
      <ColorFilter colors={colors} value={value} onChange={onChange} />
    )

    expect(wrapper).toMatchSnapshot()

    colors.forEach(color => {
      const colorRadio = wrapper.getByTestId(`color-filter-${color}`)
      fireEvent.click(colorRadio)
      expect(value).toBe(color)
    })
  })
})
