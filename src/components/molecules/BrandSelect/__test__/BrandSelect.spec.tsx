import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import BrandSelect from '..'

describe('App brand select', () => {
  it('Test get default brand select no params ', () => {
    // test snapshot
    const wrapper = render(<BrandSelect />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get default brand select ', () => {
    const values = {
      brand1: { value: true, label: 'Brand 1' },
      brand2: { value: false, label: 'Brand 2' },
    }
    // test snapshot
    const wrapper = render(<BrandSelect values={values} />)
    expect(wrapper).toMatchSnapshot()
    const brandSlug = Object.keys(values)
    const { container } = wrapper
    const brandSelection = container.querySelectorAll('input')
    expect(brandSelection.length).toEqual(Object.keys(values).length)
    brandSlug.forEach((slug, idx) => {
      const label = wrapper.getByTestId(`brand-label-${slug}`)
      expect(label).toHaveTextContent(values[slug].label)
      expect(brandSelection[idx].checked).toEqual(values[slug].value)
    })
  })

  it('Test onChange brand select ', () => {
    const values = {
      brand1: { value: true, label: 'Brand 1' },
      brand2: { value: false, label: 'Brand 2' },
    }
    // test snapshot
    const onChange = values => console.log('brand-select: values', values)
    const wrapper = render(<BrandSelect values={values} onChange={onChange} />)
    expect(wrapper).toMatchSnapshot()
    const brandSlug = ['brand1', 'brand2']
    const { container } = wrapper
    const brandSelection = container.querySelectorAll('input')
    brandSlug.forEach((slug, idx) => {
      const label = wrapper.getByTestId(`brand-label-${slug}`)
      // expect(label).toHaveTextContent(values[slug].label)
      expect(brandSelection[idx].checked).toEqual(values[slug].value)
      fireEvent.click(label)
      expect(brandSelection[idx].checked).toEqual(!values[slug].value)
    })
  })
})
