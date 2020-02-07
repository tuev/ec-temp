/**
 *
 * Tests for ReviewList
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ReviewList from '..'

describe('App ReviewList', () => {
  it('Test get default ReviewList no params ', () => {
    // test snapshot
    const wrapper = render(<ReviewList />)
    expect(wrapper).toMatchSnapshot()
  })
})
