/**
 *
 * Tests for ReviewForm
 *
 */

import React from 'react'

import { render, fireEvent, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import ReviewForm from '..'
import useForm, { REQUIRED_FIELD_ERROR, ERROR } from '../useForm'
import { stateReview, stateValidatorSchema, onSubmitForm } from '../ReviewForm'

// reference https://www.freecodecamp.org/news/testing-react-hooks/
// https://react-testing-library-examples.netlify.com/

describe('Test reducer and action', () => {
  it('should have required error', () => {
    const newState = { ...stateReview }
    const {
      result: {
        current: { state, disable },
      },
    } = renderHook(() => useForm(newState, stateValidatorSchema, onSubmitForm))
    const transformedState = Object.keys(newState).reduce(
      (acc, key) => {
        acc[key][ERROR] = REQUIRED_FIELD_ERROR
        return acc
      },
      { ...newState }
    )
    expect(state).toEqual(transformedState)
    expect(disable).toBeTruthy()
  })

  it('should enable button submit after validating correctly', async () => {
    const { container, getByText } = render(<ReviewForm />)

    const nickname = container.querySelector('[data-testid="nickname"]')
    const reviewComment = container.querySelector('[data-testid="reviewText"')
    const ratingInput = container
      .querySelector('[data-testid="rating"')
      .querySelector('input')
    const submitButon = getByText('Submit')

    fireEvent.change(nickname, { target: { value: 'test name' } })
    fireEvent.change(reviewComment, {
      target: { value: 'test name test name test name test name test name ' },
    })
    fireEvent.change(ratingInput, { target: { value: 2 } })
    fireEvent.click(submitButon)
  })
})
