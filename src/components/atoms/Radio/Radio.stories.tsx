import React from 'react'
import { action } from '@storybook/addon-actions'
import Radio from './Radio'

export default {
  component: Radio,
  includeStories: ['basic', 'outer'],
  title: 'AppRadio',
}

export const basic = () => (
  <>
    <Radio onChange={action('Radio Clicked!!!')} />
    <Radio onChange={action('Radio Clicked!!!')} checked={true} />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customcolor="blue"
      checked={true}
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customcolor="green"
      checked={true}
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customcolor="gray"
      checked={true}
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customcolor="orange"
      checked={true}
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customcolor="yellow"
      checked={true}
    />
  </>
)

export const outer = () => (
  <>
    <Radio
      onChange={action('Radio Clicked!!!')}
      variant="outer"
      checked={true}
    />
    <Radio onChange={action('Radio Clicked!!!')} variant="outer" />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customcolor="blue"
      variant="outer"
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customcolor="green"
      variant="outer"
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customcolor="gray"
      variant="outer"
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customcolor="orange"
      variant="outer"
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customcolor="yellow"
      variant="outer"
    />
  </>
)
