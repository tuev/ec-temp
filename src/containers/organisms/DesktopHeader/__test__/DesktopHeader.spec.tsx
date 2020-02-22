/**
 *
 * Tests for DesktopHeader
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import DesktopHeader from '..'
import mockdata from '../mock'
import { createMatchMedia } from 'utils/test'

describe('App DesktopHeader', () => {
  it('Test get default DesktopHeader no params ', () => {
    window.matchMedia = createMatchMedia(960)
    // test snapshot
    const wrapper = render(<DesktopHeader />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default DesktopHeader with data ', () => {
    window.matchMedia = createMatchMedia(960)
    // test snapshot
    const wrapper = render(<DesktopHeader items={mockdata} />)
    expect(wrapper).toMatchSnapshot()
  })
})
