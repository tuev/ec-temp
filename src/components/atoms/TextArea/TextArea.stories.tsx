import React from 'react'

import TextArea from './TextArea'

export default {
  component: TextArea,
  includeStories: ['basic'],
  title: 'AppTextArea',
}

export const basic = () => <TextArea />
