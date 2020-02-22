/**
 *
 * Tests for Home
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Home from '..'
import Banner from 'containers/organisms/Banner'
import SubscriptionTile from 'containers/organisms/SubscriptionTile'

describe('App Home', () => {
  it('Test get default Home no params ', () => {
    // test snapshot
    const wrapper = render(<Home />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default Home no banner, no SubscribePart ', () => {
    const props = {
      banner: Banner,
      subscribe: SubscriptionTile,
    }

    // test snapshot
    const wrapper = render(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
})
