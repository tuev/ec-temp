import { FabProps } from '@material-ui/core/Fab'
import { LayoutProps, SpaceProps } from 'styled-system'

export interface IPaginationSpec {
  total?: number
  page?: number
  step?: number
}

type IReqiredPaginationSpec = Required<IPaginationSpec>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PageHandler = (page: number) => any
export interface IPaginationHandler {
  onChange?: PageHandler
}

export type PaginationWrapperType = LayoutProps & SpaceProps

export type PaginationType = IPaginationSpec & IPaginationHandler

// export interface IRangePageParams

export type GetRangePage = (
  rangePage: IReqiredPaginationSpec
) => [number, number]

export type GetPageItem = (pageRange: [number, number]) => number[]

export type PaginationNumberType = FabProps & {
  active?: boolean | number
}

export type HandlePageChange = (
  page: number
) => (e: React.SyntheticEvent<HTMLButtonElement>) => any

export type MemoFirstPageDisabled = (
  pageData: Pick<IReqiredPaginationSpec, 'page' | 'step'>
) => boolean

export type MemoLastPageDisabled = (pageData: IReqiredPaginationSpec) => boolean

export type MemoPreviousDisabled = (
  pageData: Pick<IReqiredPaginationSpec, 'page' | 'step'>
) => boolean

export type MemoNextDisabled = (pageData: IReqiredPaginationSpec) => boolean

export type MemoLastPage = (
  pageData: Pick<IReqiredPaginationSpec, 'total' | 'step'>
) => number

export type MemoNextStep = (pageData: IReqiredPaginationSpec) => number

export type MemoPrevStep = (
  pageData: Pick<IReqiredPaginationSpec, 'page' | 'step'>
) => number

export type GetDefaultValue = (
  pageData: IReqiredPaginationSpec
) => IReqiredPaginationSpec
