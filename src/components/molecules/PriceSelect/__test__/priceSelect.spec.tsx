import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import PriceSelect from '..'
import { renderHook, act } from '@testing-library/react-hooks'
import usePriceHook from '../usePriceHook'

describe('App price select', () => {
  it('Test priceSelect Hook', () => {
    let initPrice = [3, 12]
    const changePrice = (price) => (initPrice = price)
    const changedPrice = [25, 19]
    const { result } = renderHook(() => usePriceHook(initPrice, changePrice))
    act(() => {
      result.current[1](null, changedPrice)
    })
    expect(initPrice).toBe(changedPrice)
  })

  it('Test get default price select or filter no params ', () => {
    // test snapshot
    const wrapper = render(<PriceSelect />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default price select ', () => {
    // test snapshot
    const wrapper = render(<PriceSelect values={[10, 20]} min={5} max={100} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default price select with actions ', () => {
    const onChange = (value) => console.log(value, 'value')
    // test snapshot
    const wrapper = render(
      <PriceSelect values={[9, 10]} min={3} max={95} onChange={onChange} />
    )

    expect(wrapper).toMatchSnapshot()
    const { container } = wrapper
    const priceRange = container.querySelector('input')
    fireEvent.change(priceRange, { target: { value: '25,50' } })
  })
})
