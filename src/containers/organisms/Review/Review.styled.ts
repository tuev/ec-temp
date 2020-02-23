/**
 *
 * Styled for Review
 *
 */

import styled from 'styled-components'
import { space } from 'styled-system'
import { COLOR } from '../../../theme/colors'
import Divider from '@material-ui/core/Divider'

export const ReviewContainer = styled.div`
  ${space}
  background-color: ${COLOR.gray2};
  padding-top: 40px;
  padding-bottom: 40px;
`
export const ReviewDivider = styled(Divider)`
  margin-bottom: 45px;
  color: ${COLOR.gray};
`
