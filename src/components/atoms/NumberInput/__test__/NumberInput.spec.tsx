import React from 'react'
import { mount } from 'enzyme'
import NumberInput from '..'
import toJson from 'enzyme-to-json'

describe('Number Input', () => {
  it('Number input', () => {
    const AppNumberInput = mount(<NumberInput />)

    expect(toJson(AppNumberInput)).toMatchSnapshot()
  })
})
