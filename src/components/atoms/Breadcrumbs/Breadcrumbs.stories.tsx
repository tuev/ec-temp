/**
 *
 *  Stories for Breadcrumbs
 *
 */

import React from 'react'
import Breadcrumbs from './Breadcrumbs'

export default {
  component: Breadcrumbs,
  includeStories: ['basic'],
  title: 'Breadcrumbs',
}

const fakeLinks = [
  { href: '/', title: 'Home' },
  { href: '/products', title: 'All Categories' },
]

export const basic = () => (
  <Breadcrumbs links={fakeLinks} active="Men's clothing & Accessories" />
)
