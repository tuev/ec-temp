import React, { FC } from 'react'
import { AppBurgerIcon } from './BurgerIcon.styled'
import { BaseBurgerIconProps } from './BurgerIcon.types'

const BurgerIcon: FC<BaseBurgerIconProps> = (props: BaseBurgerIconProps) => (
  <AppBurgerIcon {...props}>
    <div />
    <div />
    <div />
  </AppBurgerIcon>
)

export default BurgerIcon
