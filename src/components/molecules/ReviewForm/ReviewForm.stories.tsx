/**
 *
 *  Stories for ReviewForm
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import ReviewForm from './ReviewForm'

export default {
  component: ReviewForm,
  includeStories: ['basic'],
  title: 'ReviewForm',
}

export const basic = () => (
  <div>
    <ReviewForm />
  </div>
)
