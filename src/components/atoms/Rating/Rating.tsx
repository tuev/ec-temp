import React, { FC } from 'react'
import { AppRating } from './Rating.styled'
import { BaseRatingProps } from './Rating.types'
import useRating from './useRating'

const Rating: FC<BaseRatingProps> = (props: BaseRatingProps) => {
  const { value, onChange } = props
  const [rate, onRateChange] = useRating(value, onChange)
  return (
    <AppRating
      {...props}
      value={rate}
      onChange={onRateChange}
      name="app-rating"
    />
  )
}

export default Rating
