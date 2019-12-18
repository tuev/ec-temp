import React from 'react'
import { shallow } from 'enzyme'
import { TextArea } from '..'
import toJson from 'enzyme-to-json'

describe('Number Input', () => {
  it('Number input', () => {
    const AppTextArea = shallow(<TextArea />)

    expect(toJson(AppTextArea)).toMatchSnapshot()
  })
})
