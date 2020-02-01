/**
 *
 *  Stories for Banner
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import Banner from './Banner'

export default {
  component: Banner,
  includeStories: ['basic'],
  title: 'Banner',
}

export const basic = () => (
  <div>
    <Banner
      title="Background and Development"
      subtitle="This is your background subtitle"
    />
  </div>
)
