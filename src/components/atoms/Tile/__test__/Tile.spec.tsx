/**
 *
 * Tests for Tile
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Tile from '..'

describe('App Tile', () => {
  it('Test get default Tile no params ', () => {
    // test snapshot
    const wrapper = render(<Tile />)
    expect(wrapper).toMatchSnapshot()
  })
})
