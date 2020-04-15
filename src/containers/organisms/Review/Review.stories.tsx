/**
 *
 *  Stories for Review
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import Review from './Review'
import { reviewList } from '../../../components/molecules/ReviewList/mock'

export default {
  component: Review,
  includeStories: ['basic'],
  title: 'Review',
}

export const basic = () => (
  <div>
    <Review list={reviewList} />
  </div>
)
