import React from 'react'
import Slider from '..'
import { ValueLabel, valueText } from '../Slider'
import { mount } from 'enzyme'

describe('Slider', () => {
  it('test value text on label', () => {
    const valueTextLabel = valueText(1)

    const noValueTextLabel = valueText()

    expect(valueTextLabel).toBe('1')
    expect(noValueTextLabel).toBe('')
  })

  it('no label', () => {
    const appLabel = mount(<ValueLabel />)
    expect(appLabel).toMatchSnapshot()
  })

  it('no label', () => {
    const appLabel = mount(<ValueLabel showlabel={1} />)
    expect(appLabel).toMatchSnapshot()
  })

  it('label for number slider', () => {
    const appLabel = mount(<ValueLabel value={10} />)
    expect(appLabel).toMatchSnapshot()
  })

  it('label for range slider', () => {
    const appLabel = mount(<ValueLabel value={[10, 20]} />)
    expect(appLabel).toMatchSnapshot()
  })

  it('slider', () => {
    const appSlider = mount(<Slider value={20} />)
    expect(appSlider).toMatchSnapshot()
  })

  it('range slider', () => {
    const appSlider = mount(<Slider value={[10, 20]} />)
    expect(appSlider).toMatchSnapshot()
  })

  it(' slider has label', () => {
    const appSlider = mount(<Slider value={1} showlabel={1} />)
    expect(appSlider).toMatchSnapshot()
  })

  it('range slider has label', () => {
    const appSlider = mount(<Slider value={[10, 20]} showlabel={1} />)
    expect(appSlider).toMatchSnapshot()
  })
})
