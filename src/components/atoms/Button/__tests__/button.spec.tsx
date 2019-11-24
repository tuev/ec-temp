import React from 'react'
import Button from '..'
import { mount } from 'enzyme'

// NOTE:: Using mount from enzyme to test atoms that we can test any css changed in children dom
// Ref: https://blog.halolabs.io/testing-react-components-with-jest-enzyme-5d1dd4ddccc4
describe('Button', () => {
  it('primary large btn', () => {
    const primaryLargeBtn = mount(<Button size="large">Primary</Button>)
    expect(primaryLargeBtn).toMatchSnapshot()

    const expectStyle: {[key :string]: string} = {
      'min-width': '225px !important',
      'min-height': '60px !important',
      padding: '20px',
      'line-height': '20px',
      'font-size': '16px',
      'border-radius': '48px',
    }

    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(primaryLargeBtn).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('outline large btn', () => {
    const outlineLargeBtn = mount(
      <Button size="large" variant="outlined">
        Outlined
      </Button>
    )
    expect(outlineLargeBtn).toMatchSnapshot()

    const expectStyle: {[key :string]: string} = {
      'min-width': '225px !important',
      'min-height': '60px !important',
      padding: '20px',
      'line-height': '20px',
      'font-size': '16px',
      'border-radius': '48px',
    }

    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(outlineLargeBtn).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('primary medium btn', () => {
    const primaryMediumBtn = mount(<Button>Primary</Button>)
    expect(primaryMediumBtn).toMatchSnapshot()
    const expectStyle: { [key: string]: string} = {
      'min-width': '163px !important',
      'min-height': '48px !important',
      'font-size': '14px',
      'border-radius': '32px',
    }

    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(primaryMediumBtn).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('outline medium btn', () => {
    const outlineMediumBtn = mount(<Button variant="outlined">Outlined</Button>)

    expect(outlineMediumBtn).toMatchSnapshot()
    const expectStyle: {[key: string]: string} = {
      'min-width': '163px !important',
      'min-height': '48px !important',
      'font-size': '14px',
      'border-radius': '32px',
    }

    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(outlineMediumBtn).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('primary small btn', () => {
    const primarySmallBtn = mount(<Button size="small">Primary</Button>)

    expect(primarySmallBtn).toMatchSnapshot()

    const expectStyle: {[key: string]: string} = {
      'min-width': '90px !important',
      'min-height': '36px !important',
      'font-size': '12px',
      'border-radius': '24px',
    }

    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(primarySmallBtn).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })

  it('outline small btn', () => {
    const outlineSmallBtn = mount(
      <Button variant="outlined" size="small">
        Outlined
      </Button>
    )
    expect(outlineSmallBtn).toMatchSnapshot()

    const expectStyle: {[key: string]: string} = {
      'min-width': '90px !important',
      'min-height': '36px !important',
      'font-size': '12px',
      'border-radius': '24px',
    }

    for (const style in expectStyle) {
      if (expectStyle[style]) {
        expect(outlineSmallBtn).toHaveStyleRule(style, expectStyle[style])
      }
    }
  })
})
