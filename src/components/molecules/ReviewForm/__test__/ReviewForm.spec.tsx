/**
 *
 * Tests for ReviewForm
 *
 */

import React from 'react'

import { render } from '@testing-library/react'
import ReviewForm from '..'

describe('App ReviewForm', () => {
  it('Test get default ReviewForm no params ', () => {
    // test snapshot
    const wrapper = render(<ReviewForm />)
    expect(wrapper).toMatchSnapshot()
  })
})
