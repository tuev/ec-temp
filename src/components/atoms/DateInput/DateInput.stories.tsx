import React from 'react'

import DateInput from './DateInput'

export default {
  component: DateInput,
  includeStories: ['basic'],
  title: 'AppDate',
}

export const basic = () => <DateInput />
