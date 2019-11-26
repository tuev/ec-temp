import React from 'react'
import { mount } from 'enzyme'
import ViewMode from '..'

describe('Viewmode', () => {
  it('view mode grid', () => {
    const appViewMode = mount(<ViewMode type="grid" />)
    expect(appViewMode).toMatchSnapshot()
    const expectStyle: { [key: string]: string } = {
      width: '40px !important',
      height: '40px !important',
    }

    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(appViewMode).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('view mode list', () => {
    const appViewMode = mount(<ViewMode type="list" />)
    expect(appViewMode).toMatchSnapshot()
    const expectStyle: { [key: string]: string } = {
      width: '40px !important',
      height: '40px !important',
    }

    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(appViewMode).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('view mode grid checked', () => {
    const appViewMode = mount(<ViewMode type="grid" checked={true} />)
    expect(appViewMode).toMatchSnapshot()
    const expectStyle: { [key: string]: string } = {
      width: '40px !important',
      height: '40px !important',
    }

    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(appViewMode).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('view mode list checked', () => {
    const appViewMode = mount(<ViewMode type="list" checked={true} />)
    expect(appViewMode).toMatchSnapshot()
    const expectStyle: { [key: string]: string } = {
      width: '40px !important',
      height: '40px !important',
    }

    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(appViewMode).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })
})
