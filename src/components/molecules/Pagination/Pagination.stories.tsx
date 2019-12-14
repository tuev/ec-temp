import React, { useCallback } from 'react'
import Pagination from './Pagination'
import { action } from '@storybook/addon-actions'

export default {
  component: Pagination,
  includeStories: ['basic', 'example'],
  title: 'Pagination',
}

export const basic = () => {
  return <Pagination total={5} page={3} step={5} />
}

export const example = () => {
  return <PaginationExample onChange={msg => action(msg)} />
}

const PaginationExample = ({ onChange }) => {
  const props = { total: 24, page: 16, step: 5 }
  const handleChange = useCallback(page => onChange(`Page select : ${page}`), [
    onChange,
  ])
  return <Pagination {...props} onChange={handleChange} />
}
