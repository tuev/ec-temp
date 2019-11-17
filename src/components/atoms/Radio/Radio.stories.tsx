import React from 'react'
import { action } from '@storybook/addon-actions'
import Radio from './Radio'

export default {
  component: Radio,
  title: 'AppRadio',
}

export const basic = () => (
  <>
    <Radio onChange={action('Radio Clicked!!!')} />
    <Radio onChange={action('Radio Clicked!!!')} checked={true} />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customColor="blue"
      checked={true}
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customColor="green"
      checked={true}
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customColor="gray"
      checked={true}
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customColor="orange"
      checked={true}
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customColor="yellow"
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
      customColor="blue"
      variant="outer"
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customColor="green"
      variant="outer"
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customColor="gray"
      variant="outer"
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customColor="orange"
      variant="outer"
    />
    <Radio
      onChange={action('Radio Clicked!!!')}
      customColor="yellow"
      variant="outer"
    />
  </>
)
