/**
 *
 * ReviewItem
 *
 */

import React, { FC } from 'react'

import { Text } from '../ReviewForm/ReviewForm.styled'
import { Grid } from '@material-ui/core'
import { Rating, Typography, BlogIcon } from 'components/atoms'
import { Warning } from './ReviewItem.styled'
import { IReviewItem } from './ReviewItem.types'

const ReviewItem: FC<IReviewItem> = ({
  rating,
  fullname,
  dateCreated,
  reviewText,
  likeCount,
  commentCount,
}) => {
  return (
    <>
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
    </>
  )
}

export default ReviewItem
