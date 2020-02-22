import React from 'react'
import { shallow } from 'enzyme'
import { Flag } from '..'
import toJson from 'enzyme-to-json'
import { enFlag } from '../mock'

describe('Flag', () => {
  it('Flag no width and height attribute', () => {
    const AppFlag = shallow(<Flag src={enFlag} alt="flag" />)

    expect(toJson(AppFlag)).toMatchSnapshot()
  })
})
