import React from 'react'
import { getRangePage, getPageItem } from '../Pagination'
import { mount } from 'enzyme'
import Pagination from '..'

describe('App pagination', () => {
  it('Test get range page (total = 0, current=0, step=5) -> pagination items = [1]', () => {
    const props = { total: 0, current: 0, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)

    expect(rangePage).toStrictEqual([0, 0])
    expect(pageItems).toStrictEqual([1])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 0, current=1, step=5) -> pagination items = [1]', () => {
    const props = { total: 0, current: 1, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([0, 0])
    expect(pageItems).toStrictEqual([1])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 1, current=1, step=5) -> pagination items = [1]', () => {
    const props = { total: 1, current: 1, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 1])
    expect(pageItems).toStrictEqual([1])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 3, current=1, step=5) -> pagination items = [1,2,3]', () => {
    const props = { total: 3, current: 1, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 3])
    expect(pageItems).toStrictEqual([1, 2, 3])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 5, current=1, step=5) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 5, current: 1, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 5, current=3, step=5) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 5, current: 1, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 5, current=5, step=5) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 5, current: 5, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 5, current=5, step=10) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 5, current: 5, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 6, current=5, step=5) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 6, current: 5, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 6, current=6, step=5) -> pagination items = [6]', () => {
    const props = { total: 6, current: 6, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([6, 6])
    expect(pageItems).toStrictEqual([6])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 8, current=2, step=5) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 8, current: 1, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 8, current=6, step=5) -> pagination items = [6,7,8]', () => {
    const props = { total: 8, current: 6, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([6, 8])
    expect(pageItems).toStrictEqual([6, 7, 8])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 8, current=8, step=5) -> pagination items = [6,7,8]', () => {
    const props = { total: 8, current: 6, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([6, 8])
    expect(pageItems).toStrictEqual([6, 7, 8])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test get range page (total = 12, current=7, step=5) -> pagination items = [6,7,8,9,10]', () => {
    const props = { total: 12, current: 6, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([6, 10])
    expect(pageItems).toStrictEqual([6, 7, 8, 9, 10])

    // test snapshot
    const wrapper = mount(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
