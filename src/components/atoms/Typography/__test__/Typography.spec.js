import React from 'react'
import { mount } from 'enzyme'
import Typography from '..'
import { COLOR } from 'theme/colors'

describe('Typography', () => {
  it('header1', () => {
    const appTypo = mount(<Typography customvariant="header1" />)
    expect(appTypo).toMatchSnapshot()
    const expectStyle = {
      'font-size': '48px !important',
      color: '#2E2E2E !important',
      'line-height': '1.5 !important',
      'font-family': `'Playfair Display' !important`,
      'font-weight': 'bold !important',
    }
    for (const style in expectStyle) {
      expect(appTypo).toHaveStyleRule(style, expectStyle[style])
    }
  })
  it('header2', () => {
    const appTypo = mount(<Typography customvariant="header2" />)
    expect(appTypo).toMatchSnapshot()
    const expectStyle = {
      'font-size': '24px !important',
      color: '#2E2E2E !important',
      'line-height': '1.5 !important',
      'font-family': `'Montserrat Alternates' !important`,
      'font-weight': 'bold !important',
    }
    for (const style in expectStyle) {
      expect(appTypo).toHaveStyleRule(style, expectStyle[style])
    }
  })
  it('header3', () => {
    const appTypo = mount(<Typography customvariant="header3" />)
    expect(appTypo).toMatchSnapshot()
    const expectStyle = {
      'font-size': '16px !important',
      color: '#2E2E2E !important',
      'line-height': '1.5 !important',
      'font-family': `'Montserrat Alternates' !important`,
      'font-weight': 'bold !important',
    }
    for (const style in expectStyle) {
      expect(appTypo).toHaveStyleRule(style, expectStyle[style])
    }
  })
  it('topbar', () => {
    const appTypo = mount(<Typography customvariant="topbar" />)
    expect(appTypo).toMatchSnapshot()
    const expectStyle = {
      'font-size': '16px !important',
      color: `${COLOR.black} !important`,
      'line-height': '2.4 !important',
      'font-family': `'Montserrat Alternates' !important`,
      'font-weight': 'bold !important',
    }
    for (const style in expectStyle) {
      expect(appTypo).toHaveStyleRule(style, expectStyle[style])
    }
  })
  it('body1', () => {
    const appTypo = mount(<Typography customvariant="body1" />)
    expect(appTypo).toMatchSnapshot()
    const expectStyle = {
      'font-size': '16px !important',
      color: `${COLOR.black1} !important`,
      'line-height': '1.5 !important',
      'font-family': `'Open Sans' !important`,
    }
    for (const style in expectStyle) {
      expect(appTypo).toHaveStyleRule(style, expectStyle[style])
    }
  })
  it('body2', () => {
    const appTypo = mount(<Typography customvariant="body2" />)
    expect(appTypo).toMatchSnapshot()
    const expectStyle = {
      'font-size': '12px !important',
      color: `${COLOR.black1} !important`,
      'line-height': '2 !important',
      'font-family': `'Open Sans' !important`,
    }
    for (const style in expectStyle) {
      expect(appTypo).toHaveStyleRule(style, expectStyle[style])
    }
  })
})
