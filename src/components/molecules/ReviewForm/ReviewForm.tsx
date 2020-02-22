/**
 *
 * ReviewForm
 *
 */

import React, { FC, useMemo, useCallback } from 'react'
import {
  IReviewForm,
  IReviewFormProps,
  ReviewFormValue,
} from './ReviewForm.types'
import { Grid } from '@material-ui/core'
import { Input, TextArea, Rating, Button } from 'components/atoms'
import { Title, Text, Error } from './ReviewForm.styled'
import useForm from './useForm'
import { ReviewFormConfig } from './ReviewForm.config'
import keys from 'lodash/keys'
import get from 'lodash/get'

export const stateReview: IReviewForm = {
  nickname: { value: '', dirty: false },
  reviewText: { value: '', dirty: false },
  rating: { value: 0, dirty: false },
}

const ReviewForm: FC<IReviewFormProps> = (props: IReviewFormProps) => {
  const { onSubmit } = props
  const { state, handleOnChange, disable } = useForm(
    stateReview,
    ReviewFormConfig
  )

  const valueReview: ReviewFormValue = useMemo(
    () =>
      keys(state).reduce<ReviewFormValue>(
        (res, item) => ({
          ...res,
          [item]: get(state, [item, 'value']),
        }),
        (state as unknown) as ReviewFormValue
      ),
    [state]
  )

  const handleSubmit = useCallback(() => {
    if (onSubmit) {
      onSubmit(valueReview)
    }
  }, [onSubmit, valueReview])

  const { nickname, reviewText, rating } = state
  return (
    <div>
      <Title customvariant="header2" mb={4}>
        Add a review
      </Title>
      <Grid container={true} spacing={3} data-testid="form">
        <Grid container={true} item={true} alignItems="center">
          <Grid item={true} xs={12} md={3}>
            <Text customvariant="body1">Choose a nickname</Text>
          </Grid>
          <Grid item={true} xs={12} md={9}>
            <Input
              inputProps={{ 'data-testid': 'nickname' }}
              name="nickname"
              value={nickname.value}
              onChange={handleOnChange('nickname')}
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
              inputProps={{ 'data-testid': 'reviewText' }}
              fullWidth={true}
              name="reviewText"
              onChange={handleOnChange('reviewText')}
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
            <Rating
              data-testid="rating"
              name="review-rating"
              value={Number(rating.value)}
              onInput={handleOnChange('rating')}
            />
          </Grid>
        </Grid>

        <Grid container={true} item={true} justify="flex-end">
          <Grid item={true} xs={12} md={9}>
            <Button
              data-testid="buttonSubmit"
              size="medium"
              color="primary"
              variant="contained"
              disabled={disable}
              onClick={handleSubmit}
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
