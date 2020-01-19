/**
 *
 * Tests for ProductImageSlider
 *
 */

import React from 'react'
import { render, fireEvent, createEvent, wait } from '@testing-library/react'
import ProductImageSlider from '..'
import { getRect } from 'css-box-model'
import useImageSlide from '../useImageSlide'
import { act, renderHook } from '@testing-library/react-hooks'

import img1 from '../mock/img2.jpg'
import img2 from '../mock/img3.jpg'
import img3 from '../mock/img4.jpg'
const imgMock: string[] = [img1, img2, img3]

describe('App ProductImageSlider', () => {
  it('Test use image slide hook', () => {
    let slide = 0
    const toSlide = 2
    const handleSlide = slideIdx => (slide = slideIdx)
    const { result } = renderHook(() => useImageSlide(imgMock, handleSlide))

    expect(result.current[0]).toEqual(slide)
    act(() => {
      result.current[1].toggleSlide(toSlide)()
    })
    expect(slide).toEqual(toSlide)
  })

  it('Test get default ProductImageSlider no params ', () => {
    // test snapshot
    const wrapper = render(<ProductImageSlider />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default ProductImageSlider with images ', () => {
    // test snapshot
    const wrapper = render(<ProductImageSlider images={imgMock} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get ProductImageSlider left slide ', () => {
    const initSlide = 0
    // test snapshot
    let slide = initSlide
    const changeHandler = jest.fn().mockImplementation(slideIdx => {
      slide = slideIdx
    })
    const wrapper = render(
      <ProductImageSlider images={imgMock} onSlideChange={changeHandler} />
    )
    expect(wrapper).toMatchSnapshot()
    const element = wrapper.getByTestId(`product-item-slide-${initSlide}`)

    const event = createEvent.mouseDown(element, {
      clientX: 120,
      clientY: 120,
      buttons: 1,
    })
    fireEvent(element, event)

    const event2 = createEvent.mouseMove(element, {
      clientX: 10,
      clientY: 10,
      buttons: 1,
    })
    fireEvent(window, event2)
    fireEvent.mouseUp(window)

    expect(changeHandler).toHaveBeenCalled()
    expect(slide).toEqual(initSlide + 1)
  })

  it('Test get ProductImageSlider left slide at tail item', () => {
    const initSlide = 2
    // test snapshot
    let slide = initSlide
    const changeHandler = jest.fn().mockImplementation(slideIdx => {
      slide = slideIdx
    })
    const wrapper = render(
      <ProductImageSlider
        images={imgMock}
        onSlideChange={changeHandler}
        active={initSlide}
      />
    )
    expect(wrapper).toMatchSnapshot()
    const element = wrapper.getByTestId(`product-item-slide-${initSlide}`)

    const event = createEvent.mouseDown(element, {
      clientX: 120,
      clientY: 120,
      buttons: 1,
    })
    fireEvent(element, event)

    const event2 = createEvent.mouseMove(element, {
      clientX: 10,
      clientY: 10,
      buttons: 1,
    })
    fireEvent(window, event2)
    fireEvent.mouseUp(window)

    expect(changeHandler).toHaveBeenCalled()
    expect(slide).toEqual(initSlide)
  })

  it('Test get ProductImageSlider right slide ', () => {
    const initSlide = 2
    // test snapshot
    let slide = initSlide

    const changeHandler = jest.fn().mockImplementation(slideIdx => {
      slide = slideIdx
    })
    const wrapper = render(
      <ProductImageSlider
        images={imgMock}
        onSlideChange={changeHandler}
        active={initSlide}
      />
    )
    expect(wrapper).toMatchSnapshot()
    const element = wrapper.getByTestId(`product-item-slide-${initSlide}`)

    const event = createEvent.mouseDown(element, {
      clientX: 10,
      clientY: 20,
      buttons: 1,
    })
    fireEvent(element, event)

    const event2 = createEvent.mouseMove(window, {
      clientX: 120,
      clientY: 120,
      buttons: 1,
    })
    fireEvent(window, event2)

    fireEvent.mouseUp(window)
    expect(changeHandler).toHaveBeenCalled()
    expect(slide).toEqual(initSlide - 1)
  })

  it('Test get ProductImageSlider right slide at the first item ', () => {
    const initSlide = 0
    // test snapshot
    let slide = initSlide

    const changeHandler = jest.fn().mockImplementation(slideIdx => {
      slide = slideIdx
    })
    const wrapper = render(
      <ProductImageSlider
        images={imgMock}
        onSlideChange={changeHandler}
        active={initSlide}
      />
    )
    expect(wrapper).toMatchSnapshot()
    const element = wrapper.getByTestId(`product-item-slide-${initSlide}`)

    const event = createEvent.mouseDown(element, {
      clientX: 10,
      clientY: 20,
      buttons: 1,
    })
    fireEvent(element, event)

    const event2 = createEvent.mouseMove(window, {
      clientX: 120,
      clientY: 120,
      buttons: 1,
    })
    fireEvent(window, event2)

    fireEvent.mouseUp(window)
    expect(changeHandler).toHaveBeenCalled()
    expect(slide).toEqual(0)
  })

  it('Test get ProductImageSlider left slide with a little scroll not enough to slide previous or next ', () => {
    const initSlide = 0
    // test snapshot
    let slide = initSlide
    const changeHandler = jest.fn().mockImplementation(slideIdx => {
      slide = slideIdx
    })
    const wrapper = render(
      <ProductImageSlider images={imgMock} onSlideChange={changeHandler} />
    )
    expect(wrapper).toMatchSnapshot()
    const element = wrapper.getByTestId(`product-item-slide-${initSlide}`)

    const event = createEvent.mouseDown(element, {
      clientX: 12,
      clientY: 12,
      buttons: 1,
    })
    fireEvent(element, event)

    const event2 = createEvent.mouseMove(element, {
      clientX: 10,
      clientY: 10,
      buttons: 1,
    })
    fireEvent(window, event2)
    fireEvent.mouseUp(window)

    expect(changeHandler).toHaveBeenCalled()
    expect(slide).toEqual(initSlide)
  })
})
