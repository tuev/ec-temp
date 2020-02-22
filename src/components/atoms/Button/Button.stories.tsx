import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

export default {
  component: Button,
  includeStories: ['basic', 'large', 'mediumPrimary', 'smallPrimary'],
  title: 'AppButton',
}

export const basic = () => (
  <Button color="primary" variant="contained">
    Test
  </Button>
)

export const large = () => (
  <>
    <Button size="large">Primary</Button>
    <Button size="large" variant="outlined">
      Outlined
    </Button>
  </>
)

export const mediumPrimary = () => (
  <>
    <Button size="medium">Primary</Button>
    <Button size="medium" variant="outlined">
      Outlined
    </Button>
  </>
)

export const smallPrimary = () => (
  <>
    <Button size="small">Primary</Button>
    <Button size="small" variant="outlined">
      Outlined
    </Button>
  </>
)
