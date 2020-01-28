/**
 *
 * Tests for SearchBar
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import SearchBar from '..'

describe('App SearchBar', () => {
  it('Test get default SearchBar no params ', () => {
    // test snapshot
    const wrapper = render(<SearchBar />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default SearchBar no event handler ', () => {
    // test snapshot
    const wrapper = render(<SearchBar />)
    const testString = 'this is search string'

    expect(wrapper).toMatchSnapshot()
    const inputComp = wrapper.getByTestId('search-input')
    fireEvent.change(inputComp, { target: { value: testString } })
  })

  it('Test get default SearchBar click to input ', () => {
    let result = ''
    const onSearchValue = jest
      .fn()
      .mockImplementation(value => (result = value))
    const testString = 'this is search string'
    // test snapshot
    const wrapper = render(<SearchBar onSearch={onSearchValue} />)
    expect(wrapper).toMatchSnapshot()
    const { asFragment } = wrapper
    const fragment = asFragment()
    const searchIcon = wrapper.getByTestId('search-ref')
    fireEvent.click(searchIcon)
    expect(asFragment()).toMatchDiffSnapshot()

    fireEvent.click(document)
    expect(asFragment()).toMatchDiffSnapshot()
  })

  it('Test SearchBar to input text', () => {
    let result = ''
    const onSearchValue = jest
      .fn()
      .mockImplementation(value => (result = value))
    const testString = 'this is search string'
    // test snapshot
    const wrapper = render(<SearchBar onSearch={onSearchValue} />)
    expect(wrapper).toMatchSnapshot()

    const inputComp = wrapper.getByTestId('search-input')
    fireEvent.change(inputComp, { target: { value: testString } })
    expect(onSearchValue).toBeCalled()
    expect(result).toEqual(testString)
  })
})
