import React from 'react'
import Radio from '..'
import { mount } from 'enzyme'

describe('Radio', () => {
  it('radio', () => {
    const AppRadio = mount(<Radio />)
    expect(AppRadio).toMatchSnapshot()
  })

  it('radio checked', () => {
    const CheckedAppRadio = mount(<Radio checked />)
    expect(CheckedAppRadio).toMatchSnapshot()
  })

  it('radio green checked', () => {
    const CheckedAppRadio = mount(<Radio checked customcolor="green" />)
    expect(CheckedAppRadio).toMatchSnapshot()
  })
})
