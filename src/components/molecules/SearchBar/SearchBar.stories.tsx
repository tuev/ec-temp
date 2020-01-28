/**
 *
 *  Stories for SearchBar
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import SearchBar from './SearchBar'

export default {
  component: SearchBar,
  includeStories: ['basic'],
  title: 'SearchBar',
}

export const basic = () => (
  <div>
    <SearchBar />
  </div>
)
