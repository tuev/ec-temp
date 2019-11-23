import React from 'react'
import Tag from '..'
import { mount } from 'enzyme'
import { COLOR } from 'theme/colors'

describe.only('Tag', () => {
  it('tag 5min', () => {
    const TagApp = mount(<Tag tag="5min" />)
    expect(TagApp).toMatchSnapshot()

    const expectStyle = {
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
      expect(TagApp).toHaveStyleRule(style, expectStyle[style])
    }
  })

  it('tag hot', () => {
    const TagApp = mount(<Tag tag="hot" />)
    expect(TagApp).toMatchSnapshot()

    const expectStyle = {
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
      expect(TagApp).toHaveStyleRule(style, expectStyle[style])
    }
  })

  it('tag pop', () => {
    const TagApp = mount(<Tag tag="pop" />)
    expect(TagApp).toMatchSnapshot()

    const expectStyle = {
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
      expect(TagApp).toHaveStyleRule(style, expectStyle[style])
    }
  })

  it('tag sale', () => {
    const TagApp = mount(<Tag tag="sale" />)
    expect(TagApp).toMatchSnapshot()

    const expectStyle = {
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
      expect(TagApp).toHaveStyleRule(style, expectStyle[style])
    }
  })

  it('tag custom', () => {
    const customColor = 'green'
    const TagApp = mount(
      <Tag tag="custom" color={customColor} text="discount" />
    )
    expect(TagApp).toMatchSnapshot()

    const expectStyle = {
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
      expect(TagApp).toHaveStyleRule(style, expectStyle[style])
    }
  })
})
