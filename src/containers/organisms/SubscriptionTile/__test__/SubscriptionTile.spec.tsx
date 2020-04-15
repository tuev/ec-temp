/**
 *
 * Tests for SubscriptionTile
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import SubscriptionTile from '..'

describe('App SubscriptionTile', () => {
  it('Test get default SubscriptionTile no params ', () => {
    // test snapshot
    const wrapper = render(<SubscriptionTile />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default SubscriptionTile no event handler ', () => {
    // test snapshot
    const wrapper = render(<SubscriptionTile />)
    expect(wrapper).toMatchSnapshot()

    const subcribeBtn = wrapper.getByTestId('subscribe-btn')

    fireEvent.click(subcribeBtn)
  })

  it('Test get default SubscriptionTile with event handler ', () => {
    let result = ''
    const onSubcribeHandler = jest
      .fn()
      .mockImplementation((value) => (result = value))
    const mockEmail = 'emailtest'
    // test snapshot
    const wrapper = render(<SubscriptionTile onSubscribe={onSubcribeHandler} />)
    expect(wrapper).toMatchSnapshot()

    const emailInput = wrapper.getByTestId('subscribe-email-input')
    fireEvent.change(emailInput, { target: { value: mockEmail } })

    const subcribeBtn = wrapper.getByTestId('subscribe-btn')
    fireEvent.click(subcribeBtn)

    expect(onSubcribeHandler).toBeCalled()
    expect(result).toEqual(mockEmail)
  })
})
