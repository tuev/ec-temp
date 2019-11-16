import React from 'react'
import { action } from '@storybook/addon-actions'
import ViewMode from './ViewMode'

export default {
  component: ViewMode,
  title: 'AppViewMode',
}

export const basic = () => (
  <>
    <ViewMode onClick={action('ViewMode Clicked!!!')} type="grid" />
    <ViewMode onClick={action('ViewMode Clicked!!!')} type="list" />
  </>
)

export const checked = () => (
  <>
    <ViewMode
      onClick={action('ViewMode Clicked!!!')}
      type="grid"
      checked={true}
    />
    <ViewMode
      onClick={action('ViewMode Clicked!!!')}
      type="list"
      checked={true}
    />
  </>
)
