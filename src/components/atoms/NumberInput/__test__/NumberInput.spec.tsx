import React from 'react'
import { mount } from 'enzyme'
import NumberInput from '..'

describe('Number Input', () => {
  it('Number input', () => {
    const AppNumberInput = mount(<NumberInput />)

    expect(AppNumberInput).toMatchSnapshot()
  })
})
