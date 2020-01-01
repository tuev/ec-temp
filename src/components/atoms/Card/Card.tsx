/**
 *
 * Card
 *
 */

import React, { memo, FC } from 'react'
import { CardWrapper } from './Card.styled'
import { CardProps } from './Card.types'

const Card: FC<CardProps> = ({ children, ...rest }) => {
  return <CardWrapper {...rest}>{children}</CardWrapper>
}

export default memo(Card)
