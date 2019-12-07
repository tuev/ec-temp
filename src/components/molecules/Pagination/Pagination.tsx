import React, { FC, useMemo, useCallback, ReactEventHandler } from 'react'
import {
  PaginationWrapper,
  PaginationIcon,
  PaginationNumber,
} from './Pagination.styled'
import {
  PaginationType,
  GetRangePage,
  GetPageItem,
  MemoFirstPageDisabled,
  MemoLastPageDisabled,
  MemoPreviousDisabled,
  MemoNextDisabled,
} from './Pagination.types'
import { flow } from 'lodash'

import {
  ChevronLeft,
  ChevronRight,
  LastPage,
  FirstPage,
} from '@material-ui/icons'

export const getRangePage: GetRangePage = ({ total, current, step }) => {
  if (total === 0) {
    return [0, 0]
  }
  const currentStep = Math.ceil(current / step)
  const max = currentStep * step
  const min = max - step + 1
  // console.log(currentStep, min, max, current, step, 'min - max')
  return [min < 1 ? 1 : min, max > total ? total : max]
}

export const getPageItem: GetPageItem = ([min = 1, max = 1]) =>
  Array.apply(null, Array(max - min + 1)).map((_, index) => index + min || 1)

export const memoFirstPageDisabled: MemoFirstPageDisabled = page => page === 1
export const memoLastPageDisabled: MemoLastPageDisabled = ({ page, total }) =>
  page === total

export const memoPreviousDisabled: MemoPreviousDisabled = ({ page, step }) =>
  page - step <= 0

export const memoNextDisabled: MemoNextDisabled = ({ page, step, total }) =>
  page + step >= total
export const Pagination: FC<PaginationType> = ({
  total = 1,
  current = 1,
  step = 5,
  onChange,
}) => {
  /* ---------------------------------- Memo ---------------------------------- */

  const isFirstPageDisabled = useMemo(() => memoFirstPageDisabled(current), [
    current,
  ])
  const isLastPageDisabled = useMemo(
    () => memoLastPageDisabled({ total, page: current }),
    [total, current]
  )
  const isPreviousDisabled = useMemo(
    () => memoPreviousDisabled({ page: current, step }),
    [current, step]
  )
  const isNextDisabled = useMemo(
    () => memoNextDisabled({ page: current, total, step }),
    [total, current, step]
  )
  const rangePage = useMemo(
    () => flow(getRangePage, getPageItem)({ total, current, step }),
    [current, step, total]
  )

  /* -------------------------------- Callback -------------------------------- */

  const handleFirstPageSelect = useCallback(() => onChange && onChange(1), [
    onChange,
  ])
  const handleLastPageSelect = useCallback(
    () => onChange && onChange(Math.ceil(total / step)),
    [onChange, step, total]
  )
  const handleNextPageSelect = useCallback(() => {
    const currentStep = Math.floor(current / step) + 1
    return onChange && onChange(currentStep + 1)
  }, [current, onChange, step])
  const handlePreviousPageSelect = useCallback(() => {
    const currentStep = Math.ceil(current / step) - 1
    return currentStep + 1
  }, [current, step])

  // TODO: Need to define type for high order functional
  const handlePageSelect = useCallback(
    data => () => onChange && onChange(data),
    [onChange]
  )

  return (
    <PaginationWrapper display="flex">
      <PaginationIcon
        disabled={isFirstPageDisabled}
        onClick={handleFirstPageSelect}
      >
        <FirstPage />
      </PaginationIcon>
      <PaginationIcon
        disabled={isPreviousDisabled}
        onClick={handlePreviousPageSelect}
      >
        <ChevronLeft />
      </PaginationIcon>
      {rangePage.map(data => (
        <PaginationNumber
          key={data}
          active={current === data ? 1 : 0}
          onClick={handlePageSelect(data)}
        >
          <span>{data}</span>
        </PaginationNumber>
      ))}
      <PaginationIcon disabled={isNextDisabled} onChange={handleNextPageSelect}>
        <ChevronRight />
      </PaginationIcon>
      <PaginationIcon
        disabled={isLastPageDisabled}
        onClick={handleLastPageSelect}
      >
        <LastPage />
      </PaginationIcon>
    </PaginationWrapper>
  )
}

export default Pagination
