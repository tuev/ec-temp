/**
 *
 *  Stories for Header
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import Header from './Header'
import mockData from './mock'

export default {
  component: Header,
  includeStories: ['basic'],
  title: 'Header',
}

export const basic = () => (
  <div>
    <Header data={mockData} />
  </div>
)
