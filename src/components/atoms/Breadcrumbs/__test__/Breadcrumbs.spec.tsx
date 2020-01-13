/**
 *
 * Tests for Breadcrumbs
 *
 */

import React from 'react'
import { mount } from 'enzyme'

import Breadcrumbs from '..'
import Items from '../mock'

describe('App Breadcrumbs', () => {
  it('Test get default Breadcrumbs no params ', () => {
    // test snapshot
    const wrapper = mount(
      <Breadcrumbs>
        <Items />
      </Breadcrumbs>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
