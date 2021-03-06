import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ColorSelect from '..'
import { defaultMethod } from '../ColorSelect'

// NOTE: https://codesandbox.io/s/pknk1v4mmx for testing style-components
// * using: data-testid on component and getByTestId return by 'render' of react-testing-library

describe('App color filter', () => {
  it('Test default onChange method', () => {
    const value = defaultMethod()
    expect(value).toBe(true)
  })

  it('Test get default color filter no params ', () => {
    // test snapshot
    const wrapper = render(<ColorSelect />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default color filter ', () => {
    const colors = ['blue', 'red', 'green', 'yellow', 'black']
    // test snapshot
    const wrapper = render(<ColorSelect colors={colors} value={['green']} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default color filter with actions ', () => {
    let value = 'blue'
    const colors = ['blue', 'red', 'green', 'yellow', 'black']
    const onChange = (color) => (value = color)
    // test snapshot
    const wrapper = render(
      <ColorSelect
        colors={colors}
        value={[value]}
        onChange={onChange}
        multiselect
      />
    )

    expect(wrapper).toMatchSnapshot()

    colors.forEach((color) => {
      const colorRadio = wrapper.getByTestId(`color-filter-${color}`)
      fireEvent.click(colorRadio)
      // de select blue
    })
    const allColorBtn = wrapper.getByTestId('color-filter-all')
    expect(value).toStrictEqual(['red', 'green', 'yellow', 'black'])
    const colorRadioBlue = wrapper.getByTestId(`color-filter-blue`)

    fireEvent.click(colorRadioBlue)

    expect(allColorBtn).toMatchSnapshot()

    fireEvent.click(allColorBtn)
    expect(value).toStrictEqual([])

    fireEvent.click(allColorBtn)
    expect(value).toStrictEqual(colors)
  })

  it('Test get default color filter no crash when actions with no handler ', () => {
    const value = 'blue'
    const colors = ['blue', 'red', 'green', 'yellow', 'black']
    // test snapshot
    const wrapper = render(<ColorSelect colors={colors} value={[value]} />)

    expect(wrapper).toMatchSnapshot()

    colors.forEach((color) => {
      const colorRadio = wrapper.getByTestId(`color-filter-${color}`)
      fireEvent.click(colorRadio)
    })
  })
})
