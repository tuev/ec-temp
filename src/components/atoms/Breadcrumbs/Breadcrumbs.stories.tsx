/**
 *
 *  Stories for Breadcrumbs
 *
 */

import React from 'react'
import Breadcrumbs from './Breadcrumbs'

import Items from './mock'

export default {
  component: Breadcrumbs,
  includeStories: ['basic'],
  title: 'Breadcrumbs',
}

export const basic = () => (
  <Breadcrumbs>
    <Items />
  </Breadcrumbs>
)
