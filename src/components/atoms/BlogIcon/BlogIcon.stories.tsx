import React from 'react'
import { action } from '@storybook/addon-actions'
import BlogIcon from './BlogIcon'

export default {
  title: 'BlogIcon',
  component: BlogIcon,
  includeStories: ['basic'],
}

export const basic = () => (
  <div style={{ width: 350, display: 'flex', justifyContent: 'space-between' }}>
    <BlogIcon onClick={action('BlogIcon Clicked!!!')} icon="like" count={20} />
    <BlogIcon
      onClick={action('BlogIcon Clicked!!!')}
      icon="comment"
      count={20}
    />
    <BlogIcon onClick={action('BlogIcon Clicked!!!')} icon="bookmark" />
    <BlogIcon onClick={action('BlogIcon Clicked!!!')} icon="options" />
  </div>
)
