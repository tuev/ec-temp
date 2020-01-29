/**
 *
 * Tests for MobileHeader
 *
 */

import React from 'react'

import { render, fireEvent, wait } from '@testing-library/react'
import MobileHeader from '..'
import mockData from '../mock'
import { createMatchMedia } from 'utils/test'

describe('App MobileHeader', () => {
  it('Test hidden with media screen greater than 480', () => {
    window.matchMedia = createMatchMedia(960)
    const wrapper = render(<MobileHeader />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default MobileHeader no params ', () => {
    window.matchMedia = createMatchMedia(480)

    // test snapshot
    const wrapper = render(<MobileHeader />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default MobileHeader with mock data ', () => {
    window.matchMedia = createMatchMedia(480)

    // test snapshot
    const wrapper = render(<MobileHeader items={mockData} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default MobileHeader open event  ', async () => {
    window.matchMedia = createMatchMedia(480)

    // test snapshot
    const wrapper = render(<MobileHeader items={mockData} />)
    const { getByTestId } = wrapper
    expect(wrapper).toMatchSnapshot()

    const burgerBtn = wrapper.getByTestId('burger-icon')
    fireEvent.click(burgerBtn)
    expect(wrapper).toMatchSnapshot()
    const drawer = getByTestId('mobile-header-drawer')

    expect(drawer).toBeInTheDocument()

    const closeBtn = wrapper.getByTestId('close-drawer-btn')
    fireEvent.click(closeBtn)

    expect(drawer.getAttribute('aria-hidden')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
})
