/**
 *
 * Tests for GridLayout
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import GridLayout from '..'

describe('App GridLayout', () => {
  it('Test get default GridLayout no params ', () => {
    // test snapshot
    const wrapper = render(<GridLayout />)
    expect(wrapper).toMatchSnapshot()
  })
})
