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
