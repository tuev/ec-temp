/**
 *
 *  Stories for TextField
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import TextField from './TextField'

export default {
  component: TextField,
  includeStories: ['basic'],
  title: 'TextField',
}

export const basic = () => (
  <div>
    <TextField />
  </div>
)
