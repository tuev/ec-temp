import React from 'react'
import { action } from '@storybook/addon-actions'
import NumberComp from './NumberComp'

export default {
  component: NumberComp,
  title: 'AppNumberComp',
  includeStories: ['basic'],
}

export const basic = () => (
  <>
    <NumberComp onChange={action('NumberComp Clicked!!!')} data={1} />
    <NumberComp
      onChange={action('NumberComp Clicked!!!')}
      data={22}
      color="white"
    />
    <NumberComp
      onChange={action('NumberComp Clicked!!!')}
      data={102}
      color="white"
    />
  </>
)
