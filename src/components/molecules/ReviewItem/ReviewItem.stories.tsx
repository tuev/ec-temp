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
    <ReviewItem
      id={123}
      rating={4}
      fullname="full name"
      dateCreated="11/11/2011"
      reviewText="reviewText"
      likeCount={20}
      commentCount={20}
    />
  </div>
)
