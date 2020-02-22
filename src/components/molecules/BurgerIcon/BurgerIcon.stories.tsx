import React, { useState, useCallback } from 'react'
import { action } from '@storybook/addon-actions'
import BurgerIcon from './BurgerIcon'

export default {
  component: BurgerIcon,
  includeStories: ['basic', 'opened', 'demo'],
  title: 'BurgerIcon',
}

const BurgerIconDemo = () => {
  const [open, toggleOpen] = useState(false)

  const handleClick = useCallback(() => toggleOpen(!open), [open])
  return <BurgerIcon onClick={handleClick} open={open} />
}

export const basic = () => <BurgerIcon onClick={action('Button Clicked!!!')} />
export const opened = () => (
  <BurgerIcon open={true} onClick={action('Button Clicked!!!')} />
)
export const demo = () => <BurgerIconDemo />
