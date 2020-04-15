import React from 'react'
import {
  getRangePage,
  getPageItem,
  memoLastPage,
  memoNextStep,
  memoPrevStep,
  getDefaultValue,
  defaultOnChange,
} from '../utils'
import { render, fireEvent } from '@testing-library/react'
import Pagination from '..'
import { PageHandler } from '../Pagination.types'

// NOTE: https://codesandbox.io/s/pknk1v4mmx for testing style-components
// * using: data-testid on component and getByTestId return by 'render' of react-testing-library

describe('App pagination', () => {
  it('Test get default range page -> pagination items = [1]', () => {
    // test snapshot
    const wrapper = render(<Pagination />)
    const dataAfterChangeDefault = defaultOnChange()
    expect(dataAfterChangeDefault).toBe(true)
    expect(wrapper).toMatchSnapshot()
    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeDisabled()
    expect(prevStepPagination).toBeDisabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
    fireEvent.click(firstPagePagination)
  })

  it('Test get range page (total = 0, page=0, step=5) -> pagination items = [1]', () => {
    const props = { total: 0, page: 0, step: 5 }
    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)

    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(1)
    expect(nextStep).toEqual(1)
    expect(prevStep).toEqual(1)

    expect(rangePage).toStrictEqual([0, 0])
    expect(pageItems).toStrictEqual([1])

    // test snapshot
    const wrapper = render(
      <div>
        <Pagination {...props} />
      </div>
    )

    expect(wrapper).toMatchSnapshot()
    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeDisabled()
    expect(prevStepPagination).toBeDisabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
  })

  it('Test get range page (total = 0, page=1, step=5) -> pagination items = [1]', () => {
    const props = { total: 0, page: 1, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(1)
    expect(nextStep).toEqual(1)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([0, 0])
    expect(pageItems).toStrictEqual([1])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeDisabled()
    expect(prevStepPagination).toBeDisabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
  })

  it('Test get range page (total = 1, page=1, step=5) -> pagination items = [1]', () => {
    const props = { total: 1, page: 1, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(1)
    expect(nextStep).toEqual(1)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 1])
    expect(pageItems).toStrictEqual([1])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeDisabled()
    expect(prevStepPagination).toBeDisabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
  })

  it('Test get range page (total = 3, page=1, step=5) -> pagination items = [1,2,3]', () => {
    const props = { total: 3, page: 1, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(1)
    expect(nextStep).toEqual(1)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 3])
    expect(pageItems).toStrictEqual([1, 2, 3])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeDisabled()
    expect(prevStepPagination).toBeDisabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
  })

  it('Test get range page (total = 5, page=1, step=5) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 5, page: 1, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(1)
    expect(nextStep).toEqual(1)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeDisabled()
    expect(prevStepPagination).toBeDisabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
  })

  it('Test get range page (total = 5, page=3, step=5) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 5, page: 3, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(1)
    expect(nextStep).toEqual(1)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeDisabled()
    expect(prevStepPagination).toBeDisabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
  })

  it('Test get range page (total = 5, page=5, step=5) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 5, page: 5, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(1)
    expect(nextStep).toEqual(1)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeDisabled()
    expect(prevStepPagination).toBeDisabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
  })

  it('Test get range page (total = 5, page=5, step=10) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 5, page: 5, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(1)
    expect(nextStep).toEqual(1)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeDisabled()
    expect(prevStepPagination).toBeDisabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
  })

  it('Test get range page (total = 6, page=5, step=5) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 6, page: 5, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(2)
    expect(nextStep).toEqual(2)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeDisabled()
    expect(prevStepPagination).toBeDisabled()
    expect(nextStepPagination).toBeEnabled()
    expect(lastPagePagination).toBeEnabled()
  })

  it('Test get range page (total = 6, page=6, step=5) -> pagination items = [6]', () => {
    const props = { total: 6, page: 6, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(2)
    expect(nextStep).toEqual(2)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([6, 6])
    expect(pageItems).toStrictEqual([6])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeEnabled()
    expect(prevStepPagination).toBeEnabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
  })

  it('Test get range page (total = 8, page=2, step=5) -> pagination items = [1,2,3,4,5]', () => {
    const props = { total: 8, page: 1, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(2)
    expect(nextStep).toEqual(2)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([1, 5])
    expect(pageItems).toStrictEqual([1, 2, 3, 4, 5])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeDisabled()
    expect(prevStepPagination).toBeDisabled()
    expect(nextStepPagination).toBeEnabled()
    expect(lastPagePagination).toBeEnabled()
  })

  it('Test get range page (total = 8, page=6, step=5) -> pagination items = [6,7,8]', () => {
    const props = { total: 8, page: 6, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(2)
    expect(nextStep).toEqual(2)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([6, 8])
    expect(pageItems).toStrictEqual([6, 7, 8])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeEnabled()
    expect(prevStepPagination).toBeEnabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
  })

  it('Test get range page (total = 8, page=8, step=5) -> pagination items = [6,7,8]', () => {
    const props = { total: 8, page: 6, step: 5 }
    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(2)
    expect(nextStep).toEqual(2)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([6, 8])
    expect(pageItems).toStrictEqual([6, 7, 8])

    // test snapshot
    const wrapper = render(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    expect(firstPagePagination).toBeEnabled()
    expect(prevStepPagination).toBeEnabled()
    expect(nextStepPagination).toBeDisabled()
    expect(lastPagePagination).toBeDisabled()
  })

  it('Test get range page (total = 12, page=7, step=5) -> pagination items = [6,7,8,9,10]', () => {
    const props = { total: 12, page: 6, step: 5 }

    let currentPage = 0
    const pageHandle: PageHandler = (page) => (currentPage = page)

    const { total, page, step } = getDefaultValue(props)
    const lastPage = memoLastPage({ total, step })
    const nextStep = memoNextStep({ page, step, total })
    const prevStep = memoPrevStep({ page, step })

    expect(lastPage).toEqual(3)
    expect(nextStep).toEqual(3)
    expect(prevStep).toEqual(1)

    const rangePage = getRangePage(props)
    const pageItems = getPageItem(rangePage)
    expect(rangePage).toStrictEqual([6, 10])
    expect(pageItems).toStrictEqual([6, 7, 8, 9, 10])

    // test snapshot
    const wrapper = render(<Pagination {...props} onChange={pageHandle} />)
    expect(wrapper).toMatchSnapshot()

    const firstPagePagination = wrapper.getByTestId('pagination-first-page')
    const prevStepPagination = wrapper.getByTestId('pagination-previous-page')
    const nextStepPagination = wrapper.getByTestId('pagination-next-page')
    const lastPagePagination = wrapper.getByTestId('pagination-last-page')
    const randomPage = wrapper.getByTestId('pagination-page-9')
    expect(firstPagePagination).toBeEnabled()
    expect(prevStepPagination).toBeEnabled()
    expect(nextStepPagination).toBeEnabled()
    expect(lastPagePagination).toBeEnabled()
    fireEvent.click(firstPagePagination)
    expect(currentPage).toBe(1)
    fireEvent.click(prevStepPagination)
    expect(currentPage).toBe(1)
    fireEvent.click(nextStepPagination)
    expect(currentPage).toBe(3)
    fireEvent.click(lastPagePagination)
    expect(currentPage).toBe(3)
    fireEvent.click(randomPage)
    expect(currentPage).toBe(9)
  })
})
