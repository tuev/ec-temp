import React, { useCallback } from 'react'
import Pagination from './Pagination'
import { action } from '@storybook/addon-actions'
import { PageHandler } from './Pagination.types'

export default {
  component: Pagination,
  includeStories: ['basic', 'example'],
  title: 'Pagination',
}

export const basic = () => {
  return <Pagination total={5} page={3} step={5} />
}

export const example = () => {
  const handleMsgChange = (page: number) => action(`${page}`)
  return <PaginationExample onChange={handleMsgChange} />
}

const PaginationExample = ({ onChange }: { onChange: PageHandler }) => {
  const props = { total: 24, page: 16, step: 5 }
  const handleChange = useCallback((page) => onChange(page), [onChange])
  return <Pagination {...props} onChange={handleChange} />
}
