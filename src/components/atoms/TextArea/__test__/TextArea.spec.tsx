import React from 'react'
import { shallow } from 'enzyme'
import TextArea from '..'
import toJson from 'enzyme-to-json'

describe('Text Area', () => {
  it('test default Text Area', () => {
    const AppTextArea = shallow(<TextArea />)

    expect(toJson(AppTextArea)).toMatchSnapshot()
  })
})
