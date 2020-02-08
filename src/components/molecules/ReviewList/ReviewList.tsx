/**
 *
 * ReviewList
 *
 */

import React, { FC } from 'react'
import { Title, Text } from '../ReviewForm/ReviewForm.styled'
import { Grid } from '@material-ui/core'
import { Rating, Typography, BlogIcon } from 'components/atoms'
import { ReviewListWrapper, ReviewListRow, Warning } from './ReviewList.styled'
import { IReviewList } from './ReviewList.types'

const ReviewList: FC<IReviewList> = props => {
  const { list } = props
  return (
    <ReviewListWrapper>
      <Title customvariant="header2" mb={4}>
        Product reviews
      </Title>
      {list &&
        list.map(review => {
          const {
            id,
            rating,
            fullname,
            dateCreated,
            reviewText,
            likeCount,
            commentCount,
          } = review
          return (
            <ReviewListRow container={true} key={id} mb={4}>
              <Grid item={true} xs={12} md={3}>
                <Rating value={rating} readOnly={true} mb={4} />
                <Text customvariant="body1">{fullname}</Text>
                <Warning customvariant="body2">{dateCreated}</Warning>
              </Grid>
              <Grid item={true} xs={12} md={9}>
                <Typography customvariant="body1" mb={3}>
                  {reviewText}
                </Typography>
                <Grid container={true}>
                  <Grid item={true} xs={2}>
                    <BlogIcon icon="like" count={likeCount} />
                  </Grid>
                  <Grid item={true} xs={2}>
                    <BlogIcon icon="comment" count={commentCount} />
                  </Grid>
                </Grid>
              </Grid>
            </ReviewListRow>
          )
        })}
    </ReviewListWrapper>
  )
}

export default ReviewList
