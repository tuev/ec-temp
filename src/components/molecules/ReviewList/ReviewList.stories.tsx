/**
 *
 *  Stories for ReviewList
 *
 */

import React from 'react'
import ReviewList from './ReviewList'
import { reviewList } from './mock'

export default {
  component: ReviewList,
  includeStories: ['basic'],
  title: 'ReviewList',
}

export const basic = () => (
  <div>
    <ReviewList list={reviewList} />
  </div>
)
