/**
 *
 * Tests for ReviewForm
 *
 */

import React from 'react'

import { shallow } from 'enzyme'
import ReviewForm from '..'

describe('App ReviewForm', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ReviewForm />)
  })

  it('Should enable button submit after validating correctly', () => {
    const inputNickname = wrapper.find(`[name='nickname']`).at(0)
    const inputReviewText = wrapper.find(`[name='reviewText']`).at(0)
    const inputRating = wrapper.find(`[name='app-rating']`).at(0)
    inputNickname.simulate('change', { target: { value: 'name' } })
    inputReviewText.simulate('change', {
      target: { value: 'this is a text 50 characters this is a text 50 char' },
    })
    inputRating.simulate('input', { target: { value: 1 } })
    expect(wrapper.state()).toEqual(false)
  })
})
