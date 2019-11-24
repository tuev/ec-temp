import React from 'react'
import Tag from '..'
import { getTagColor } from '../Tag'
import { mount } from 'enzyme'
import { COLOR, ColorType } from 'theme/colors'

describe('Tag', () => {
  it('getTagColor method', () => {
    const customTagColor = getTagColor('custom')
    const minTagColor = getTagColor('5min')
    const hotTagColor = getTagColor('hot')
    const popTagColor = getTagColor('pop')
    const saleTagColor = getTagColor('sale')

    expect(customTagColor).toBe(COLOR.primary)
    expect(minTagColor).toBe(COLOR.blue)
    expect(hotTagColor).toBe(COLOR.red)
    expect(popTagColor).toBe(COLOR.orange)
    expect(saleTagColor).toBe(COLOR.primary)
  })

  it('tag 5min', () => {
    const TagApp = mount(<Tag tag="5min" />)
    expect(TagApp).toMatchSnapshot()

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
        expect(TagApp).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('tag hot', () => {
    const TagApp = mount(<Tag tag="hot" />)
    expect(TagApp).toMatchSnapshot()

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
        expect(TagApp).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('tag pop', () => {
    const TagApp = mount(<Tag tag="pop" />)
    expect(TagApp).toMatchSnapshot()

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
        expect(TagApp).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('tag sale', () => {
    const TagApp = mount(<Tag tag="sale" />)
    expect(TagApp).toMatchSnapshot()

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
        expect(TagApp).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('tag custom', () => {
    const customColor = 'green'
    const TagApp = mount(
      <Tag tag="custom" color={customColor} text="discount" />
    )
    expect(TagApp).toMatchSnapshot()

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
        expect(TagApp).toHaveStyleRule(style, expectStyle[style])
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
      const TagAppCustomColor = mount(
        <Tag tag="custom" color={color} text="discount" />
      )

      expect(TagAppCustomColor).toMatchSnapshot()

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
          expect(TagAppCustomColor).toHaveStyleRule(style, expectStyle[style])
        }
      }
    })
  })
})
