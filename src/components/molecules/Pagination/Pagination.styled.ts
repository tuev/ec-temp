import styled from 'styled-components'
import { PaginationWrapperType, PaginationNumberType } from './Pagination.types'
import { layout, space } from 'styled-system'
import { Fab } from '@material-ui/core'
import { FabProps } from '@material-ui/core/Fab'
import { COLOR } from 'theme/colors'
import { ifProp } from 'styled-tools'
export const PaginationWrapper: React.FC<PaginationWrapperType> = styled.div<
  PaginationWrapperType
>`
  ${layout};
  ${space};
`

export const PaginationIcon: React.FC<FabProps> = styled(Fab)<FabProps>`
  width: 36px !important;
  height: 36px !important;
  outline: none !important;

  &:first-child {
    margin-right: 16px !important;
  }

  &:last-child {
    margin-left: 16px !important;
  }
`

export const PaginationNumberWrapper = styled.div`
  display: block;
  padding: 0 16px;
`
export const PaginationNumber: React.FC<PaginationNumberType> = styled(Fab)<
  PaginationNumberType
>`
  width: 36px !important;
  height: 36px !important;
  outline: none !important;
  margin: 0 16px !important;
  background-color: ${ifProp('active', COLOR.primary, COLOR.white)} !important;
  color: ${ifProp('active', COLOR.white, COLOR.black1)} !important;
`
