import React from 'react'
import { action } from '@storybook/addon-actions'
import ViewMode from './ViewMode'

export default {
  component: ViewMode,
  title: 'AppViewMode',
  includeStories: ['basic', 'checked'],
}

export const basic = () => (
  <>
    <ViewMode onClick={action('ViewMode Clicked!!!')} type="list" />
  </>
)

export const checked = () => (
  <>
    <ViewMode type="grid" />
  </>
)
