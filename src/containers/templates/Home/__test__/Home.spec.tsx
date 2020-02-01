/**
 *
 * Tests for Home
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Home from '..'

describe('App Home', () => {
  it('Test get default Home no params ', () => {
    // test snapshot
    const wrapper = render(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
})
