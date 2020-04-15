/**
 *
 *  Stories for ReviewItem
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import ReviewItem from './ReviewItem'

export default {
  component: ReviewItem,
  includeStories: ['basic'],
  title: 'ReviewItem',
}

export const basic = () => (
  <div>
    <ReviewItem />
  </div>
)
