/**
 *
 * ReviewList
 *
 */

import React, { FC } from 'react'
import { Title } from '../ReviewForm/ReviewForm.styled'
import ReviewItem from 'components/molecules/ReviewItem'
import { ReviewListWrapper, ReviewListRow } from './ReviewList.styled'
import { IReviewList } from './ReviewList.types'
import isEmpty from 'lodash/isEmpty'

const ReviewList: FC<IReviewList> = (props) => {
  const { list = [] } = props
  return (
    <ReviewListWrapper>
      <Title customvariant="header2" mb={4}>
        Product reviews
      </Title>
      {isEmpty(list) ? (
        <div>No reviews</div>
      ) : (
        list.map((reviewProps) => (
          <ReviewListRow container={true} key={reviewProps.id} mb={4}>
            <ReviewItem {...reviewProps} />
          </ReviewListRow>
        ))
      )}
    </ReviewListWrapper>
  )
}

export default ReviewList
