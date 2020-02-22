/**
 *
 * Tests for Footer
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Footer from '..'

describe('App Footer', () => {
  it('Test get default Footer no params ', () => {
    // test snapshot
    const wrapper = render(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })
})
