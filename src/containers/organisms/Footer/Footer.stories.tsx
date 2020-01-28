/**
 *
 *  Stories for Footer
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import Footer from './Footer'

export default {
  component: Footer,
  includeStories: ['basic'],
  title: 'Footer',
}

export const basic = () => (
  <div>
    <Footer />
  </div>
)
