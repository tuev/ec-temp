/**
 *
 * Tests for ProductList
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import ProductList from '..'

import { data } from '../mock/data.mock'
import { filterOptions } from '../mock/filter.mock'

describe('App ProductList', () => {
  it('Test get default ProductList no params ', () => {
    const wrapper = render(
      <ProductList items={data} filter={filterOptions} page={3} total={15} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
