/**
 *
 * Review
 *
 */

import React, { FC } from 'react'
import { ReviewForm, ReviewList } from '../../../components/molecules'
import { BaseReviewProps } from './Review.types'
import { ReviewContainer, ReviewDivider } from './Review.styled'
import { StylesProvider } from '@material-ui/core/styles'

const Review: FC<BaseReviewProps> = props => {
  const { list } = props
  return (
    <ReviewContainer>
      <ReviewList list={list} />
      <StylesProvider injectFirst={true}>
        <ReviewDivider />
      </StylesProvider>
      <ReviewForm />
    </ReviewContainer>
  )
}

export default Review
