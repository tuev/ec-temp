import React from 'react'
import Rating from '..'
import { mount } from 'enzyme'
import useRating from '../useRating'
import { act, renderHook } from '@testing-library/react-hooks'

describe('Rating', () => {
  it('rating hook', () => {
    const initValue = 3
    let valueRating = initValue
    const newRate = 4
    const handleRatingFilter = jest
      .fn()
      .mockImplementation(value => (valueRating = value))

    const { result } = renderHook(() =>
      useRating(initValue, handleRatingFilter)
    )

    expect(result.current[0]).toEqual(initValue)
    act(() => {
      result.current[1](null, newRate)
    })

    expect(handleRatingFilter).toHaveBeenCalled()
    expect(valueRating).toEqual(newRate)

    act(() => {
      result.current[1]()
    })

    expect(valueRating).toEqual(newRate)
  })

  it('rating', () => {
    const appRating = mount(<Rating value={4.3} name="test rating" />)

    expect(appRating).toMatchSnapshot()
  })
})
