/**
 *
 *  Stories for SubscriptionTile
 *
 */

import React from 'react'

import SubscriptionTile from './SubscriptionTile'
export default {
  component: SubscriptionTile,
  includeStories: ['basic'],
  title: 'SubscriptionTile',
}

export const basic = () => {
  return <SubscriptionTile />
}
