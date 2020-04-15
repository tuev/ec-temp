/**
 *
 * Tests for Banner
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Banner from '..'

describe('App Banner', () => {
  it('Test get default Banner no params ', () => {
    // test snapshot
    const wrapper = render(<Banner title="banner title" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default Banner no params with action', () => {
    // test snapshot
    const actionHandler = jest
      .fn()
      .mockImplementation((e) => console.log('click banner'))
    const wrapper = render(
      <Banner action={actionHandler} title="banner title" />
    )
    expect(wrapper).toMatchSnapshot()

    const bannerBtn = wrapper.getByTestId('banner-btn')
    fireEvent.click(bannerBtn)
    expect(actionHandler).toHaveBeenCalled()
  })
})
