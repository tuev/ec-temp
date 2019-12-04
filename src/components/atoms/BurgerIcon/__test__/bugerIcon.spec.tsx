import React from 'react'
import BurgerIcon from '..'
import { mount } from 'enzyme'

// NOTE:: Using mount from enzyme to test atoms that we can test any css changed in children dom
// Ref: https://blog.halolabs.io/testing-react-components-with-jest-enzyme-5d1dd4ddccc4
describe('Burger icon', () => {
  it('basic burger icon', () => {
    const basicBurgerIcon = mount(<BurgerIcon />)
    expect(basicBurgerIcon).toMatchSnapshot()
  })
  it('opned burger icon btn', () => {
    const openedBurgerIcon = mount(<BurgerIcon open={true} />)
    expect(openedBurgerIcon).toMatchSnapshot()
  })
  it('green green', () => {
    const greenBurgerIcon = mount(<BurgerIcon color="green" />)
    expect(greenBurgerIcon).toMatchSnapshot()
  })
})
