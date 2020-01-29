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
    const wrapper = render(
      <ReviewForm
        id="123"
        authorId="01"
        authorName="dai"
        authorRating={2}
        authorOpinion="opinion"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
