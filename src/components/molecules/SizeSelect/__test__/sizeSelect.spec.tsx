import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import SizeSelect from '..'
import { SIZE_PARAMS } from '../SizeSelect.types'
import UserEvent from '@testing-library/user-event'
import { last } from 'lodash'

// NOTE: https://codesandbox.io/s/pknk1v4mmx for testing style-components
// * using: data-testid on component and getByTestId return by 'render' of react-testing-library

// NOTE: https://codesandbox.io/embed/94pm1qprmo
// * using user-event to handle event of user

describe('App size select', () => {
  it('Test get default size select no params ', () => {
    // test snapshot
    const wrapper = render(<SizeSelect value={['L']} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default size select type select no params ', () => {
    // test snapshot
    const wrapper = render(<SizeSelect type="select" value={['M']} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default size select ', () => {
    const sizes: SIZE_PARAMS[] = ['M', 'L', 'XS', 'XXL', 'XL']
    // test snapshot
    const wrapper = render(<SizeSelect sizes={sizes} value={['XS']} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default size select type dropdown ', () => {
    const sizes: SIZE_PARAMS[] = ['M', 'L', 'XS', 'XXL', 'XL']
    // test snapshot
    const wrapper = render(
      <SizeSelect sizes={sizes} value={['XS']} type="select" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default size filter(multipleselect) with actions ', () => {
    let value: SIZE_PARAMS = 'M'
    const sizes: SIZE_PARAMS[] = ['M', 'L', 'XS', 'XXL', 'XL']
    const onChange = (size) => (value = size)
    // test snapshot
    const wrapper = render(
      <SizeSelect
        sizes={sizes}
        value={[value]}
        onChange={onChange}
        multipleselect
      />
    )

    expect(wrapper).toMatchSnapshot()

    sizes.forEach((size) => {
      const sizeRadio = wrapper.getByTestId(`size-filter-${size}`)
      fireEvent.click(sizeRadio)
    })
    fireEvent.click(wrapper.getByTestId(`size-filter-M`))
    expect(value).toStrictEqual(['L', 'XS', 'XXL', 'XL'])
    const allSizeBtn = wrapper.getByTestId('size-filter-all')
    expect(allSizeBtn).toMatchSnapshot()

    sizes.forEach((size) => {
      const sizeRadio = wrapper.getByTestId(`size-filter-${size}`)
      fireEvent.click(sizeRadio)
    })
    expect(value).toStrictEqual(['M'])

    fireEvent.click(allSizeBtn)
    expect(value).toStrictEqual(sizes)
  })

  it('Test get default size filter with actions ', () => {
    let value: SIZE_PARAMS = 'M'
    const sizes: SIZE_PARAMS[] = ['M', 'L', 'XS', 'XXL', 'XL']
    const onChange = (size) => (value = size)
    // test snapshot
    const wrapper = render(
      <SizeSelect sizes={sizes} value={[value]} onChange={onChange} />
    )

    expect(wrapper).toMatchSnapshot()

    sizes.forEach((size) => {
      const sizeRadio = wrapper.getByTestId(`size-filter-${size}`)
      fireEvent.click(sizeRadio)

      expect(value).toStrictEqual([size])
    })
  })

  it('Test get default size filter select with actions ', async () => {
    let value: SIZE_PARAMS[] = ['M']
    const sizes: SIZE_PARAMS[] = ['M', 'L', 'XS', 'XXL', 'XL']
    const onChange = (size) => (value = size)
    const changeHandler = jest.fn().mockImplementation((value) => {
      onChange(value)
    })

    // test snapshot
    const wrapper = render(
      <SizeSelect
        sizes={sizes}
        value={value}
        onChange={changeHandler}
        type="select"
      />
    )

    expect(wrapper).toMatchSnapshot()
    const { getByTestId, getByRole, container, getAllByText } = wrapper

    const selectSizeComp = getByTestId('size-filter-select')
    const selectButton = getByRole('button')
    expect(selectButton).not.toBeNull()
    expect(selectSizeComp).not.toBeNull()

    UserEvent.click(selectButton)

    for (const svalue of sizes) {
      UserEvent.click(selectButton)

      const label = getAllByText(svalue)
      UserEvent.click(last(label))

      expect(changeHandler).toHaveBeenCalled()
      expect(value).toEqual([svalue])
    }
  })
})
