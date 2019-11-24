import React from 'react'
import { mount } from 'enzyme'
import NumberComp from '..'

describe('App number component input', () => {
  it('nmber input component', () => {
    const AppComp = mount(<NumberComp />)

    expect(AppComp).toMatchSnapshot()

    const expectStyle: { [key: string]: string } = {
      width: '27px',
      height: '27px',
      border: '1px solid #F62F5E',
      'border-radius': '50%',
      'font-size': '14px',
      display: 'inline-flex',
      'justify-content': 'center',
      'align-items': 'center',
      'background-color': 'transparent',
      'outline-color': 'transparent',
      'outline-style': 'none',
      cursor: 'pointer',
      'background-color': '#F62F5E',
      color: '#fff',
    }
    for (const key in expectStyle) {
      if (expectStyle[key]) {
        expect(AppComp).toHaveStyleRule(key, expectStyle[key])
      }
    }
  })
})
