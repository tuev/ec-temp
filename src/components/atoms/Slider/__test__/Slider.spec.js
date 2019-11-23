import React from 'react'
import Slider from '..'
import { mount } from 'enzyme'

describe('Slider', () => {
  it('slider', () => {
    const appSlider = mount(<Slider value={20} />)
    expect(appSlider).toMatchSnapshot()
  })

  it('range slider', () => {
    const appSlider = mount(<Slider value={[10, 20]} />)
    expect(appSlider).toMatchSnapshot()
  })

  it('slider has label', () => {
    const appSlider = mount(<Slider value={[10, 20]} showlabel={1} />)
    expect(appSlider).toMatchSnapshot()
  })
})
