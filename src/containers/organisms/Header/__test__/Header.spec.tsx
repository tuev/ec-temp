/**
 *
 * Tests for Header
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Header from '..'
import { createMatchMedia } from 'utils/test'

import mockItem from '../mock'

describe('App Header', () => {
  it('Test get default Header no params ', () => {
    // test snapshot
    const wrapper = render(<Header data={mockItem} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default Header mobile', () => {
    window.matchMedia = createMatchMedia(460)
    // test snapshot
    const wrapper = render(<Header data={mockItem} />)

    expect(wrapper).toMatchSnapshot()
    const mobileHeader = wrapper.getByTestId('mobile-header')
    expect(mobileHeader).toBeInTheDocument()
  })

  it('Test get default Header desktop', () => {
    window.matchMedia = createMatchMedia(960)
    // test snapshot
    const wrapper = render(<Header data={mockItem} />)
    expect(wrapper).toMatchSnapshot()
    const mobileHeader = wrapper.getByTestId('desktop-header')
    expect(mobileHeader).toBeInTheDocument()
  })
})
