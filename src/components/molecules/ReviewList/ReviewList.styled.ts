/**
 *
 * Styled for ReviewList
 *
 */

import styled from 'styled-components'
import { space } from 'styled-system'
import { BaseReviewRowProps } from './ReviewList.types'
import { Grid } from '@material-ui/core'
import { Typography } from '../../atoms'
import { COLOR } from '../../../theme/colors'

export const ReviewListRow = styled(Grid)<BaseReviewRowProps>`
  ${space}
`

export const ReviewListWrapper: React.FC = styled.div`
  ${space}
`
export const Warning = styled(Typography)`
  color: ${COLOR.black2};
`
