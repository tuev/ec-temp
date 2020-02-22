/**
 *
 * Tests for ReviewList
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ReviewList from '..'

import { reviewList } from '../mock'

describe('App ReviewList', () => {
  it('Test get default ReviewList no params ', () => {
    // test snapshot
    const wrapper = render(<ReviewList />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default ReviewList with list ', () => {
    // test snapshot
    const wrapper = render(<ReviewList list={reviewList} />)
    expect(wrapper).toMatchSnapshot()
  })
})
