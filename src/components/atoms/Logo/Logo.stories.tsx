/**
 *
 *  Stories for Logo
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import Logo from './Logo'

export default {
  component: Logo,
  includeStories: ['basic'],
  title: 'Logo',
}

export const basic = () => (
  <div>
    <Logo size="72px" />
  </div>
)
