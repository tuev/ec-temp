import React, { FC } from 'react'
import { AppRating } from './Rating.styled'
import { BaseRatingProps } from './Rating.types'

const Rating: FC<BaseRatingProps> = (props: BaseRatingProps) => (
  <AppRating precision={0.5} {...props} />
)

export default Rating
