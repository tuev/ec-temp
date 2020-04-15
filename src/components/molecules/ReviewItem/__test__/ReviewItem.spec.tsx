/**
 *
 * Tests for ReviewItem
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ReviewItem from '..'

describe('App ReviewItem', () => {
  it('Test get default ReviewItem no params ', () => {
    // test snapshot
    const wrapper = render(<ReviewItem />)
    expect(wrapper).toMatchSnapshot()
  })
})
