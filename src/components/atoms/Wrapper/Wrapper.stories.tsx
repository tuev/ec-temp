/**
 *
 *  Stories for Wrapper
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import Wrapper from './Wrapper'

export default {
  component: Wrapper,
  includeStories: ['basic'],
  title: 'Wrapper',
}

export const basic = () => <Wrapper />
