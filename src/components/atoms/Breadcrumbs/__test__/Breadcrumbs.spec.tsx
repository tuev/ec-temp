/**
 *
 * Tests for Breadcrumbs
 *
 */

import React from 'react'
import { mount } from 'enzyme'

import Breadcrumbs from '..'

describe('App Breadcrumbs', () => {
  it('Test get default Breadcrumbs ', () => {
    const fakeLinks = [
      { href: '/', title: 'Home' },
      { href: '/products', title: 'All Categories' },
    ]
    // test snapshot
    const wrapper = mount(
      <Breadcrumbs links={fakeLinks} active="Men's clothing & Accessories" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default Breadcrumbs no params ', () => {
    const fakeLinks = [
      { href: '/', title: 'Home' },
      { href: '/products', title: 'All Categories' },
    ]
    // test snapshot
    const wrapper = mount(<Breadcrumbs />)
    expect(wrapper).toMatchSnapshot()
  })
})
