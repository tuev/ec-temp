import React from 'react'
import { shallow } from 'enzyme'
import Input from '..'
import toJson from 'enzyme-to-json'

describe('Number Input', () => {
  it('Number input', () => {
    const AppInput = shallow(<Input type="number" />)

    expect(toJson(AppInput)).toMatchSnapshot()
  })
})
