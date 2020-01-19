/**
 *
 * Tests for ProductDetail
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ProductDetail from '..'

describe('App ProductDetail', () => {
  it('Test get default ProductDetail no params ', () => {
    // test snapshot
    const wrapper = render(<ProductDetail />)
    expect(wrapper).toMatchSnapshot()
  })
})
