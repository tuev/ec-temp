import { ReactEventHandler } from 'react'
import { FabProps } from '@material-ui/core/Fab'
import { LayoutProps, SpaceProps } from 'styled-system'

export interface IPaginationSpec {
  total?: number
  current?: number
  step?: number
  onChange?: (page: number) => any
}

export type PaginationWrapperType = LayoutProps & SpaceProps

export type PaginationType = IPaginationSpec & LayoutProps & SpaceProps

// export interface IRangePageParams

export type GetRangePage = (rangePage: {
  total: number
  current: number
  step: number
}) => [number, number]

export type GetPageItem = (pageRange: [number, number]) => number[]

export type PaginationNumberType = FabProps & {
  active?: boolean | number
}

export type HandlePageChange = (
  page: number
) => (e: React.SyntheticEvent<HTMLButtonElement>) => any

export type MemoFirstPageDisabled = (page: number) => boolean

export type MemoLastPageDisabled = (pageData: {
  page: number
  total: number
}) => boolean

export type MemoPreviousDisabled = (pageData: {
  page: number
  step: number
}) => boolean

export type MemoNextDisabled = (pageData: {
  page: number
  step: number
  total: number
}) => boolean
