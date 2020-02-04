/**
 *
 * ReviewForm
 *
 */

import React, { FC } from 'react'
import {
  IReviewForm,
  IReviewFormValidator,
  IReviewFilterData,
} from './ReviewForm.types'
import { Grid } from '@material-ui/core'
import { Input, TextArea, Rating, Button } from '../../atoms'
import { Title, Text, Warning } from './ReviewForm.styled'
import useForm from './useForm'

const ReviewForm: FC = () => {
  const stateReview: IReviewForm = {
    nickname: { value: '', error: '' },
    reviewText: { value: '', error: '' },
    rating: { value: 0, error: '' },
  }

  const stateValidatorSchema: IReviewFormValidator = {
    nickname: {
      required: true,
      validator: {
        func: (value: string): boolean => /^[a-zA-Z]+$/.test(value),
        error: 'Invalid first name format.',
      },
    },
    reviewText: {
      required: true,
      validator: {
        func: (value: string): boolean => value.length > 50,
        error: 'Review must be at least 50 characters.',
      },
    },
    rating: {
      required: true,
      validator: {
        func: (value: string): boolean => Number(value) >= 0,
        error: 'Rating must be greater 0.',
      },
    },
  }

  const onSubmitForm = (values: IReviewFilterData): void => {
    console.log(values)
  }

  const {
    values,
    errors,
    handleOnChange,
    handleOnRating,
    // handleOnSubmit,
    disable,
  } = useForm(stateReview, stateValidatorSchema, onSubmitForm)

  const { nickname, reviewText, rating } = values
  return (
    <div>
      <Title customvariant="header2">Add a review</Title>
      <Grid container spacing={3}>
        <Grid container item alignItems="center">
          <Grid item xs={12} md={3}>
            <Text customvariant="body1">Choose a nickname</Text>
          </Grid>
          <Grid item xs={12} md={9}>
            <Input
              name="nickname"
              value={nickname}
              onChange={handleOnChange}
              error={Boolean(errors.nickname)}
            />
          </Grid>
        </Grid>

        <Grid container item>
          <Grid item xs={12} md={3}>
            <Text pt={10} customvariant="body1">
              Your review
            </Text>
          </Grid>
          <Grid item xs={12} md={9}>
            <TextArea
              fullWidth
              name="reviewText"
              onChange={handleOnChange}
              value={reviewText}
              error={Boolean(errors.reviewText)}
            />
            <Warning customvariant="body2">
              Your review must be at least 50 characters
            </Warning>
          </Grid>
        </Grid>

        <Grid container item alignItems="center">
          <Grid item xs={12} md={3}>
            <Text customvariant="body1">Overall rating</Text>
          </Grid>
          <Grid item xs={12} md={9}>
            <Rating value={Number(rating)} onInput={handleOnRating} />
          </Grid>
        </Grid>

        <Grid container item justify="flex-end">
          <Grid item xs={12} md={9}>
            <Button
              size="medium"
              color="primary"
              variant="contained"
              disabled={disable}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ReviewForm
