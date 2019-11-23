import React from 'react'
import { mount } from 'enzyme'
import Checkbox from '..'

describe('Checkbox', () => {
  it('checkbox', () => {
    const appCheckbox = mount(<Checkbox />)

    expect(appCheckbox).toMatchSnapshot()
  })

  it('checkbox', () => {
    const appCheckbox = mount(<Checkbox />)

    expect(appCheckbox).toMatchSnapshot()
  })
})
