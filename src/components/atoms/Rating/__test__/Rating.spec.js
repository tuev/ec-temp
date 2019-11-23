import React from 'react'
import Rating from '..'
import { mount } from 'enzyme'

describe('Rating', () => {
  it('rating', () => {
    const appRating = mount(<Rating value={4.3} name="test rating" />)

    expect(appRating).toMatchSnapshot()
  })
})
