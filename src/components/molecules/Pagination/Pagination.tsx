import React, { FC, useMemo, useCallback } from 'react'
import {
  PaginationWrapper,
  PaginationIcon,
  PaginationNumber,
  PaginationNumberWrapper,
} from './Pagination.styled'
import { PaginationType } from './Pagination.types'
import { flow, get } from 'lodash'

import {
  ChevronLeft,
  ChevronRight,
  LastPage,
  FirstPage,
} from '@material-ui/icons'
import * as utils from './utils'

export const Pagination: FC<PaginationType> = props => {
  const onChange = get(props, 'onChange', utils.defaultOnChange)
  const defaultSkip = +get(process.env, 'SKIP', 5)
  const { page, total, step } = utils.getDefaultValue({
    page: get(props, 'page', 1),
    step: get(props, 'step', defaultSkip),
    total: get(props, 'total', 1),
  })
  /* ---------------------------------- Memo ---------------------------------- */

  const isFirstPageDisabled = useMemo(
    () => utils.memoFirstPageDisabled({ page, step }),
    [page, step]
  )
  const isLastPageDisabled = useMemo(
    () => utils.memoLastPageDisabled({ total, page, step }),
    [total, page, step]
  )
  const isPreviousDisabled = useMemo(
    () => utils.memoPreviousDisabled({ page, step }),
    [page, step]
  )
  const isNextDisabled = useMemo(
    () => utils.memoNextDisabled({ page, total, step }),
    [total, page, step]
  )
  const rangePage = useMemo(
    () => flow(utils.getRangePage, utils.getPageItem)({ total, page, step }),
    [page, step, total]
  )
  const lastPage = useMemo(() => utils.memoLastPage({ total, step }), [
    step,
    total,
  ])
  const nextStepPage = useMemo(
    () => utils.memoNextStep({ page, step, total }),
    [page, step, total]
  )
  const prevStepPage = useMemo(() => utils.memoPrevStep({ page, step }), [
    page,
    step,
  ])
  /* -------------------------------- Callback -------------------------------- */

  const handleFirstPageSelect = useCallback(() => onChange(1), [onChange])
  const handleLastPageSelect = useCallback(() => onChange(lastPage), [
    lastPage,
    onChange,
  ])
  const handleNextStepSelect = useCallback(() => onChange(nextStepPage), [
    nextStepPage,
    onChange,
  ])
  const handlePreviousStepSelect = useCallback(() => onChange(prevStepPage), [
    onChange,
    prevStepPage,
  ])

  // TODO: Need to define type for high order functional
  const handlePageSelect = useCallback(data => (): void => onChange(data), [
    onChange,
  ])

  return (
    <PaginationWrapper display="flex">
      <PaginationIcon
        disabled={isFirstPageDisabled}
        onClick={handleFirstPageSelect}
        data-testid="pagination-first-page"
      >
        <FirstPage />
      </PaginationIcon>
      <PaginationIcon
        disabled={isPreviousDisabled}
        onClick={handlePreviousStepSelect}
        data-testid="pagination-previous-page"
      >
        <ChevronLeft />
      </PaginationIcon>
      <PaginationNumberWrapper>
        {rangePage.map(data => (
          <PaginationNumber
            key={data}
            active={+(page === data)}
            onClick={handlePageSelect(data)}
            data-testid={`pagination-page-${data}`}
          >
            <span>{data}</span>
          </PaginationNumber>
        ))}
      </PaginationNumberWrapper>

      <PaginationIcon
        disabled={isNextDisabled}
        onClick={handleNextStepSelect}
        data-testid="pagination-next-page"
      >
        <ChevronRight />
      </PaginationIcon>
      <PaginationIcon
        disabled={isLastPageDisabled}
        onClick={handleLastPageSelect}
        data-testid="pagination-last-page"
      >
        <LastPage />
      </PaginationIcon>
    </PaginationWrapper>
  )
}

export default Pagination
