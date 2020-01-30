/**
 *
 *  Stories for DesktopHeader
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import DesktopHeader from './DesktopHeader'
import HeaderItem from './mock'

export default {
  component: DesktopHeader,
  includeStories: ['basic'],
  title: 'DesktopHeader',
}

export const basic = () => (
  <div>
    <DesktopHeader items={HeaderItem} />
  </div>
)
