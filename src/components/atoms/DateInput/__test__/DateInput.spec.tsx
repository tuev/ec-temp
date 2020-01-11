import React from 'react'
import { shallow } from 'enzyme'
import { DateInput } from '..'
import toJson from 'enzyme-to-json'

describe('Date', () => {
  it('Date no attribute', () => {
    const AppDate = shallow(<DateInput />)

    expect(toJson(AppDate)).toMatchSnapshot()
  })
})
