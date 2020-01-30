import React, { FC, useState, useCallback, useEffect } from 'react'
import { AppBurgerIcon } from './BurgerIcon.styled'
import { BaseBurgerIconProps } from './BurgerIcon.types'

const BurgerIcon: FC<BaseBurgerIconProps> = (props: BaseBurgerIconProps) => {
  const { open = false, handleOpen } = props
  const [isOpen, toggleOpen] = useState<boolean>(open)

  const handleClick = useCallback(() => toggleOpen(!isOpen), [isOpen])

  useEffect(() => {
    if (handleOpen) {
      handleOpen(isOpen)
    }
  }, [handleOpen, isOpen])

  useEffect(() => {
    // if (open !== isOpen) {
    toggleOpen(open)
    // }
  }, [open])

  return (
    <AppBurgerIcon
      {...props}
      open={isOpen}
      onClick={handleClick}
      data-testid="burger-icon"
    >
      <div />
      <div />
      <div />
    </AppBurgerIcon>
  )
}

export default BurgerIcon
