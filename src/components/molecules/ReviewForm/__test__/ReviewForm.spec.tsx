/**
 *
 * Tests for ReviewForm
 *
 */

import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import { renderHook, act } from '@testing-library/react-hooks'
import ReviewForm from '..'
import useForm, { REQUIRED_FIELD_ERROR, reducer } from '../useForm'
import { stateReview } from '../ReviewForm'
import { ReviewFormConfig } from '../ReviewForm.config'

// reference https://www.freecodecamp.org/news/testing-react-hooks/
// https://react-testing-library-examples.netlify.com/

describe('Test reducer and action', () => {
  it('should be equal initState with invalid action', () => {
    const newState = { ...stateReview }
    const result = reducer(newState, { type: 'new tyep' })
    expect(result).toStrictEqual(newState)
  })

  it('should not break if dont require annything', () => {
    const newState = { ...stateReview }
    const {
      result: {
        current: { state, disable },
      },
    } = renderHook(() => useForm(newState, {}))
    const transformedState = Object.keys(newState).reduce(
      (acc, key) => {
        acc[key].error = ''
        return acc
      },
      { ...newState }
    )
    expect(state).toEqual(transformedState)
    expect(disable).toBeFalsy()
  })

  it('should have required error', () => {
    const newState = { ...stateReview }
    const {
      result: {
        current: { state, disable },
      },
    } = renderHook(() => useForm(newState, ReviewFormConfig))
    const transformedState = Object.keys(newState).reduce(
      (acc, key) => {
        acc[key].error = REQUIRED_FIELD_ERROR
        return acc
      },
      { ...newState }
    )
    expect(state).toEqual(transformedState)
    expect(disable).toBeTruthy()
  })

  it('change value with action onchange', () => {
    const newState = { ...stateReview }
    const value = renderHook(() => useForm(newState, ReviewFormConfig))
    const transformedState = Object.keys(newState).reduce(
      (acc, key) => {
        acc[key].error = REQUIRED_FIELD_ERROR
        return acc
      },
      { ...newState }
    )
    expect(value.result.current.state).toEqual(transformedState)
    expect(value.result.current.disable).toBeTruthy()

    act(() =>
      value.result.current.handleOnChange('rating')({ target: { value: '3' } })
    )

    const newStateWithRating = {
      ...transformedState,
      rating: { value: '3', dirty: true, error: '' },
    }

    expect(value.result.current.state).toStrictEqual(newStateWithRating)

    act(() =>
      value.result.current.handleOnChange('nickname')({
        target: { value: 'newNickname' },
      })
    )

    expect(value.result.current.disable).toBeTruthy()

    const newStateWithNickname = {
      ...newStateWithRating,
      nickname: { value: 'newNickname', dirty: true, error: '' },
    }

    expect(value.result.current.state).toStrictEqual(newStateWithNickname)
    expect(value.result.current.disable).toBeTruthy()

    act(() =>
      value.result.current.handleOnChange('reviewText')({
        target: { value: 'newNickname' },
      })
    )

    expect(value.result.current.disable).toBeTruthy()

    const newStateWithReviewText1 = {
      ...newStateWithNickname,
      reviewText: {
        value: 'newNickname',
        dirty: true,
        error: 'Review must be at least 50 characters.',
      },
    }

    expect(value.result.current.state).toStrictEqual(newStateWithReviewText1)

    act(() =>
      value.result.current.handleOnChange('reviewText')({
        target: { value: 'newNickname'.repeat(27) },
      })
    )

    const newStateWithReviewText2 = {
      ...newStateWithReviewText1,
      reviewText: {
        value: 'newNickname'.repeat(27),
        dirty: true,
        error: '',
      },
    }

    expect(value.result.current.disable).toBeFalsy()
    expect(value.result.current.state).toStrictEqual(newStateWithReviewText2)
  })

  it('should enable button submit after validating correctly', async () => {
    const name = 'TestReview'
    const comment50 =
      'test name test name test name test name test name test name test name test name test name test name '
    const ratingStar = '3'

    let reviewResult = null
    const handleSubmit = jest.fn().mockImplementation(value => {
      reviewResult = value
    })

    const { getByTestId, getByDisplayValue } = render(
      <ReviewForm onSubmit={handleSubmit} />
    )

    const nickname = getByTestId('nickname')
    const reviewComment = getByTestId('reviewText')
    const ratingInput = getByDisplayValue(ratingStar)
    const submitButon = getByTestId('buttonSubmit')

    fireEvent.change(nickname, { target: { value: 'test ame' } })
    fireEvent.change(reviewComment, {
      target: { value: 'test name test name test name test name test name ' },
    })

    fireEvent.click(ratingInput)
    expect(submitButon).toMatchSnapshot()
    expect(submitButon).toBeDisabled()
    fireEvent.click(submitButon)
    expect(handleSubmit).toBeCalledTimes(0)
    fireEvent.change(nickname, { target: { value: name } })

    fireEvent.change(reviewComment, {
      target: {
        value: comment50,
      },
    })

    fireEvent.click(submitButon)
    expect(reviewResult).toStrictEqual({
      nickname: name,
      reviewText: comment50,
      rating: ratingStar,
    })
  })

  it('should not break when not put onSubmit function into component', async () => {
    const name = 'TestReview'
    const comment50 =
      'test name test name test name test name test name test name test name test name test name test name '
    const ratingStar = '3'

    const reviewResult = null

    const wrapper = render(<ReviewForm />)
    const { getByTestId, getByDisplayValue } = wrapper
    expect(wrapper).toMatchSnapshot()
    const nickname = getByTestId('nickname')
    const reviewComment = getByTestId('reviewText')
    const ratingInput = getByDisplayValue(ratingStar)
    const submitButon = getByTestId('buttonSubmit')

    fireEvent.change(nickname, { target: { value: 'test ame' } })
    fireEvent.change(reviewComment, {
      target: { value: 'test name test name test name test name test name ' },
    })

    fireEvent.click(ratingInput)
    expect(submitButon).toMatchSnapshot()
    expect(submitButon).toBeDisabled()
    fireEvent.click(submitButon)
    fireEvent.change(nickname, { target: { value: name } })

    fireEvent.change(reviewComment, {
      target: {
        value: comment50,
      },
    })

    fireEvent.click(submitButon)
  })
})
