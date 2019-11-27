import React from 'react'
import Radio from '..'
import { getTheme } from '../Radio'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { get } from 'lodash'
import { COLOR, ColorType, colorPalettes } from 'theme/colors'
import { getRadioColor } from '../Radio.styled'

describe('Radio', () => {
  it('get radio color', () => {
    const radioColor = getRadioColor({})

    expect(radioColor).toBe(COLOR.primary)
    const colors: ColorType[] = [
      'black',
      'blue',
      'gray',
      'green',
      'orange',
      'primary',
      'red',
      'yellow',
    ]
    colors.forEach(color => {
      const radioCustomColor = getRadioColor({ customcolor: color })
      expect(radioCustomColor).toBe(COLOR[color])
    })
  })

  it('radio theme', () => {
    const customTheme = getTheme()
    const colors: ColorType[] = [
      'primary',
      'blue',
      'black',
      'orange',
      'gray',
      'green',
      'yellow',
      'red',
    ]

    colors.forEach(color =>
      expect(get(getTheme(color), 'palette.primary')).toStrictEqual(
        colorPalettes[color]
      )
    )
    expect(get(customTheme, 'palette.primary.main')).toBe(COLOR.primary)
  })

  it('radio', () => {
    const AppRadio = renderer.create(<Radio />).toJSON()
    expect(AppRadio).toMatchSnapshot()
  })

  it('radio primary', () => {
    const AppRadio = renderer.create(<Radio customcolor="primary" />).toJSON()
    expect(AppRadio).toMatchSnapshot()
  })

  it('radio checked', () => {
    const CheckedAppRadio = renderer.create(<Radio checked={true} />).toJSON()
    expect(CheckedAppRadio).toMatchSnapshot()
  })

  it('radio green checked', () => {
    const CheckedAppRadio = renderer
      .create(<Radio checked={true} customcolor="green" />)
      .toJSON()
    expect(CheckedAppRadio).toMatchSnapshot()
  })
})
