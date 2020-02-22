/**
 *
 *  Stories for MobileHeader
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import MobileHeader from './MobileHeader'
import HeaderItem from './mock'

export default {
  component: MobileHeader,
  includeStories: ['basic'],
  title: 'MobileHeader',
}

export const basic = () => (
  <div>
    <MobileHeader items={HeaderItem} />
  </div>
)
