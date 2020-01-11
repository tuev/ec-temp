import React from 'react'

import { enFlag } from './mock'
import Flag from './Flag'

export default {
  component: Flag,
  includeStories: ['basic'],
  title: 'AppFlag',
}

export { enFlag }

export const basic = () => <Flag src={enFlag} alt="" />
