/**
 *
 * ReviewList
 *
 */

import React, { FC } from 'react'
import { Title, Text } from '../ReviewForm/ReviewForm.styled'
import { Warning } from './ReviewList.styled'
import { Grid } from '@material-ui/core'
import { Rating, Typography, BlogIcon } from 'components/atoms'
import { ReviewListWrapper, ReviewListRow } from './ReviewList.styled'
import { BaseReviewListProps } from './ReviewList.types'

const ReviewList: FC<BaseReviewListProps> = (props: BaseReviewListProps) => {
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
            <ReviewListRow container key={id} mb={4}>
              <Grid item xs={12} md={3}>
                <Rating value={rating} readOnly mb={4} />
                <Text customvariant="body1">{fullname}</Text>
                <Warning customvariant="body2">{dateCreated}</Warning>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography customvariant="body1" mb={3}>
                  {reviewText}
                </Typography>
                <Grid container>
                  <Grid item xs={2}>
                    <BlogIcon icon="like" count={likeCount} />
                  </Grid>
                  <Grid item xs={2}>
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
