import React from 'react'
import TextArea from '..'
import { getTextAreaColor } from '../TextArea'
import { mount } from 'enzyme'
import { COLOR, ColorType } from 'theme/colors'

describe('TextArea', () => {
  it('getTextAreaColor method', () => {
    const customTextAreaColor = getTextAreaColor('custom')
    const minTextAreaColor = getTextAreaColor('5min')
    const hotTextAreaColor = getTextAreaColor('hot')
    const popTextAreaColor = getTextAreaColor('pop')
    const saleTextAreaColor = getTextAreaColor('sale')

    expect(customTextAreaColor).toBe(COLOR.primary)
    expect(minTextAreaColor).toBe(COLOR.blue)
    expect(hotTextAreaColor).toBe(COLOR.red)
    expect(popTextAreaColor).toBe(COLOR.orange)
    expect(saleTextAreaColor).toBe(COLOR.primary)
  })

  it('tag 5min', () => {
    const TextAreaApp = mount(<TextArea tag="5min" />)
    expect(TextAreaApp).toMatchSnapshot()

    const expectStyle: { [key: string]: string } = {
      'background-color': '#6EB2FB',
      color: '#fff',
      'font-size': '18px',
      'text-align': 'center',
      'min-width': '60px',
      height: '30px',
      display: 'inline-block',
      'line-height': '30px',
      padding: '0 8px',
      margin: '0 8px',
    }
    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(TextAreaApp).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('tag hot', () => {
    const TextAreaApp = mount(<TextArea tag="hot" />)
    expect(TextAreaApp).toMatchSnapshot()

    const expectStyle: { [key: string]: string } = {
      'background-color': '#F62F5E',
      color: '#fff',
      'font-size': '18px',
      'text-align': 'center',
      'min-width': '60px',
      height: '30px',
      display: 'inline-block',
      'line-height': '30px',
      padding: '0 8px',
      margin: '0 8px',
    }
    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(TextAreaApp).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('tag pop', () => {
    const TextAreaApp = mount(<TextArea tag="pop" />)
    expect(TextAreaApp).toMatchSnapshot()

    const expectStyle: { [key: string]: string } = {
      'background-color': '#F1AD3D',
      color: '#fff',
      'font-size': '18px',
      'text-align': 'center',
      'min-width': '60px',
      height: '30px',
      display: 'inline-block',
      'line-height': '30px',
      padding: '0 8px',
      margin: '0 8px',
    }
    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(TextAreaApp).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('tag sale', () => {
    const TextAreaApp = mount(<TextArea tag="sale" />)
    expect(TextAreaApp).toMatchSnapshot()

    const expectStyle: { [key: string]: string } = {
      'background-color': '#F62F5E',
      color: '#fff',
      'font-size': '18px',
      'text-align': 'center',
      'min-width': '60px',
      height: '30px',
      display: 'inline-block',
      'line-height': '30px',
      padding: '0 8px',
      margin: '0 8px',
    }
    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(TextAreaApp).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('tag custom', () => {
    const customColor = 'green'
    const TextAreaApp = mount(
      <TextArea tag="custom" color={customColor} text="discount" />
    )
    expect(TextAreaApp).toMatchSnapshot()

    const expectStyle: { [key: string]: string } = {
      'background-color': COLOR[customColor],
      color: '#fff',
      'font-size': '18px',
      'text-align': 'center',
      'min-width': '60px',
      height: '30px',
      display: 'inline-block',
      'line-height': '30px',
      padding: '0 8px',
      margin: '0 8px',
    }
    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(TextAreaApp).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('tag custom color', () => {
    const customColors: ColorType[] = [
      'primary',
      'blue',
      'black',
      'orange',
      'gray',
      'green',
      'yellow',
      'red',
    ]
    customColors.forEach(color => {
      const TextAreaAppCustomColor = mount(
        <TextArea tag="custom" color={color} text="discount" />
      )

      expect(TextAreaAppCustomColor).toMatchSnapshot()

      const expectStyle: { [key: string]: string } = {
        'background-color': COLOR[color],
        color: '#fff',
        'font-size': '18px',
        'text-align': 'center',
        'min-width': '60px',
        height: '30px',
        display: 'inline-block',
        'line-height': '30px',
        padding: '0 8px',
        margin: '0 8px',
      }
      for (const style in expectStyle) {
        if (expectStyle[style]) {
          expect(TextAreaAppCustomColor).toHaveStyleRule(
            style,
            expectStyle[style]
          )
        }
      }
    })
  })
})
