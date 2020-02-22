/**
 *
 *  Stories for GridLayout
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import GridLayout from './GridLayout'

export default {
  component: GridLayout,
  includeStories: ['basic'],
  title: 'GridLayout',
}

export const basic = () => (
  <div>
    <GridLayout />
  </div>
)
