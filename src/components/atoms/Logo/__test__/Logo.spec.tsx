/**
 *
 * Tests for Logo
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Logo from '..'

describe('App Logo', () => {
  it('Test get default Logo no params ', () => {
    // test snapshot
    const wrapper = render(<Logo />)
    expect(wrapper).toMatchSnapshot()
  })
})
