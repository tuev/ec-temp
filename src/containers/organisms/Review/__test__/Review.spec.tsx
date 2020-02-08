/**
 *
 * Tests for Review
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Review from '..'

describe('App Review', () => {
  it('Test get default Review no params ', () => {
    // test snapshot
    const wrapper = render(<Review />)
    expect(wrapper).toMatchSnapshot()
  })
})
