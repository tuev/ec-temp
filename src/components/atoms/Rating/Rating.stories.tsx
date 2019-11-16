import React from 'react'
import { action } from '@storybook/addon-actions'
import Rating from './Rating'

export default {
  component: Rating,
  title: 'AppRating',
}

export const basic = () => (
  <>
    <Rating onChange={action('Rating Clicked!!!')} value={4.3} />
  </>
)


