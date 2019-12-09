import {
  GetRangePage,
  GetPageItem,
  MemoFirstPageDisabled,
  MemoLastPageDisabled,
  MemoPreviousDisabled,
  MemoNextDisabled,
  MemoLastPage,
  MemoNextStep,
  MemoPrevStep,
  GetDefaultValue,
} from './Pagination.types'

export const getRangePage: GetRangePage = ({ total, page, step }) => {
  if (total === 0) {
    return [0, 0]
  }
  const pageStep = Math.ceil(page / step)
  const max = pageStep * step
  const min = max - step + 1
  const startRange = Math.max(min, 1)
  const endRange = Math.min(total, max)
  return [startRange, endRange]
}

export const getPageItem: GetPageItem = ([min, max]) =>
  [...Array(max - min + 1)].map((_, index) => index + min || 1)

export const memoFirstPageDisabled: MemoFirstPageDisabled = ({ page, step }) =>
  Math.ceil(page / step) === 1
export const memoLastPageDisabled: MemoLastPageDisabled = ({
  page,
  total,
  step,
}) => Math.ceil(total / step) === Math.ceil(page / step)

export const memoPreviousDisabled: MemoPreviousDisabled = ({ page, step }) =>
  page - step <= 0

export const memoNextDisabled: MemoNextDisabled = ({ page, step, total }) =>
  Math.ceil(page / step) >= Math.ceil(total / step)

export const memoLastPage: MemoLastPage = ({ total, step }) =>
  Math.ceil(total / step)

export const memoNextStep: MemoNextStep = ({ page, step, total }) =>
  Math.min((Math.ceil(page / step) + 1) * step + 1, Math.ceil(total / step))

export const memoPrevStep: MemoPrevStep = ({ page, step }) =>
  Math.max((Math.floor(page / step) - 1) * step + 1, 1)

export const defaultOnChange = () => true

export const getDefaultValue: GetDefaultValue = ({ total, page, step }) => {
  return {
    page: Math.max(page, 1),
    step: Math.max(step, 5),
    total: Math.max(total, 1),
  }
}
