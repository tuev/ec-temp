import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

export default {
  component: Button,
  title: 'AppButton',
  includeStories: ['basic', 'large', 'mediumPrimary', 'smallPrimary'],
}

export const basic = () => (
  <Button
    onClick={action('Button Clicked!!!')}
    color="primary"
    variant="contained"
  >
    Test
  </Button>
)

export const large = () => (
  <>
    <Button onClick={action('Button Clicked!!!')} size="large">
      Primary
    </Button>
    <Button
      onClick={action('Button Clicked!!!')}
      size="large"
      variant="outlined"
    >
      Outlined
    </Button>
  </>
)

export const mediumPrimary = () => (
  <>
    <Button onClick={action('Button Clicked!!!')} size="medium">
      Primary
    </Button>
    <Button
      onClick={action('Button Clicked!!!')}
      size="medium"
      variant="outlined"
    >
      Outlined
    </Button>
  </>
)

export const smallPrimary = () => (
  <>
    <Button onClick={action('Button Clicked!!!')} size="small">
      Primary
    </Button>
    <Button
      onClick={action('Button Clicked!!!')}
      size="small"
      variant="outlined"
    >
      Outlined
    </Button>
  </>
)
