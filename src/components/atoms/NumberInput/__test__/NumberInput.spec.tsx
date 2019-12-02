import React from 'react'
import { shallow } from 'enzyme'
import NumberInput from '..'
import toJson from 'enzyme-to-json'

describe('Number Input', () => {
  it('Number input', () => {
    const AppNumberInput = shallow(<NumberInput />)

    expect(toJson(AppNumberInput)).toMatchSnapshot()
  })
})
