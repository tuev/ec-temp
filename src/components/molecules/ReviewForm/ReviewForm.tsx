/**
 *
 * ReviewForm
 *
 */

import React, { FC } from 'react'
import {
  IReviewForm,
  IReviewFormValidator,
  ISubmittedData,
} from './ReviewForm.types'
import { Grid } from '@material-ui/core'
import { Input, TextArea, Rating, Button } from '../../atoms'
import { Title, Text, Error } from './ReviewForm.styled'
import useForm from './useForm'

const ReviewForm: FC = () => {
  const stateReview: IReviewForm = {
    nickname: { value: '', dirty: false },
    reviewText: { value: '', dirty: false },
    rating: { value: 0, dirty: false },
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
        func: (value: string): boolean => Number(value) > 0,
        error: 'Rating must be greater 0.',
      },
    },
  }

  const onSubmitForm = (data: ISubmittedData): void => {
    const value = data
    console.log(value)
  }

  const {
    state,
    handleOnChange,
    handleOnRating,
    handleOnSubmit,
    disable,
  } = useForm(stateReview, stateValidatorSchema, onSubmitForm)

  const { nickname, reviewText, rating } = state
  return (
    <div>
      <Title customvariant="header2" mb={4}>
        Add a review
      </Title>
      <Grid container={true} spacing={3}>
        <Grid container={true} item={true} alignItems="center">
          <Grid item={true} xs={12} md={3}>
            <Text customvariant="body1">Choose a nickname</Text>
          </Grid>
          <Grid item={true} xs={12} md={9}>
            <Input
              name="nickname"
              value={nickname.value}
              onChange={handleOnChange}
              error={Boolean(nickname.error) && nickname.dirty}
            />
            {Boolean(nickname.error) && nickname.dirty && (
              <Error customvariant="body2">{nickname.error}</Error>
            )}
          </Grid>
        </Grid>

        <Grid container={true} item={true}>
          <Grid item={true} xs={12} md={3}>
            <Text pt={10} customvariant="body1">
              Your review
            </Text>
          </Grid>
          <Grid item={true} xs={12} md={9}>
            <TextArea
              fullWidth={true}
              name="reviewText"
              onChange={handleOnChange}
              value={reviewText.value}
              error={Boolean(reviewText.error) && reviewText.dirty}
            />
            {Boolean(reviewText.error) && reviewText.dirty && (
              <Error customvariant="body2">{reviewText.error}</Error>
            )}
          </Grid>
        </Grid>

        <Grid container={true} item={true} alignItems="center">
          <Grid item={true} xs={12} md={3}>
            <Text customvariant="body1">Overall rating</Text>
          </Grid>
          <Grid item={true} xs={12} md={9}>
            <Rating value={Number(rating.value)} onInput={handleOnRating} />
          </Grid>
        </Grid>

        <Grid container={true} item={true} justify="flex-end">
          <Grid item={true} xs={12} md={9}>
            <Button
              size="medium"
              color="primary"
              variant="contained"
              disabled={disable}
              onClick={handleOnSubmit}
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
