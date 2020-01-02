import React from 'react'
import { shallow } from 'enzyme'
import { Image } from '..'
import toJson from 'enzyme-to-json'

describe('Image', () => {
  it('Image no width and height attribute', () => {
    const AppImage = shallow(<Image src="./img.jpg" alt="shirt" />)

    expect(toJson(AppImage)).toMatchSnapshot()
  })
})
