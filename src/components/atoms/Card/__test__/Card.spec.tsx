/**
 *
 * Tests for Card
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Card from '..'

describe('App Card', () => {
  it('Test get default Card no params ', () => {
    // test snapshot
    const wrapper = render(<Card />)
    expect(wrapper).toMatchSnapshot()
  })
})
