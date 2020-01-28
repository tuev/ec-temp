/**
 *
 * Tests for TextField
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import TextField from '..'

describe('App TextField', () => {
  it('Test get default TextField no params ', () => {
    // test snapshot
    const wrapper = render(<TextField />)
    expect(wrapper).toMatchSnapshot()
  })
})
