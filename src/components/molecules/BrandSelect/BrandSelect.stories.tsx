import React, { useCallback, useState } from 'react'

import BrandSelect from './BrandSelect'

export default {
  component: BrandSelect,
  includeStories: ['basic'],
  title: 'BrandSelect',
}

export const basic = () => (
  <BrandSelect
    values={{
      brand1: { value: true, label: 'Brand 1' },
      brand2: { value: false, label: 'Brand 2' },
    }}
  />
)
