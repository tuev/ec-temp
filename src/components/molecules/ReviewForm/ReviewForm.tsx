/**
 *
 * ReviewForm
 *
 */

import React, { FC } from 'react'
import { ReviewFormProps } from './ReviewForm.types'
import Typography from '../../atoms/Typography'
import { Grid } from '@material-ui/core'
import { Input, TextArea, Wrapper } from '../../atoms'

const ReviewForm: FC<ReviewFormProps> = (props: ReviewFormProps) => {
  return (
    <div>
      <Typography customvariant="header2">Add a review</Typography>
      <Grid container spacing={3}>
        <Grid container alignItems="center">
          <Grid item md={3}>
            <Typography className="Review__Label" customvariant="body1">
              Choose a nickname
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Input />
          </Grid>
        </Grid>

        <Grid container alignItems="center">
          <Grid item md={3}>
            <Typography className="Review__Label" customvariant="body1">
              Your review
            </Typography>
          </Grid>
          <Grid item md={9}>
            <TextArea fullWidth />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ReviewForm
