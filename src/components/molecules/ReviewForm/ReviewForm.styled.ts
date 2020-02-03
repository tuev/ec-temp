/**
 *
 * Styled for ReviewForm
 *
 */

import styled from 'styled-components'
import Typography from '../../atoms/Typography'
import { COLOR } from '../../../theme/colors'

export const Title = styled(Typography)``

export const Text = styled(Typography)`
  font-weight: 600;
`

export const Warning = styled(Typography)`
  color: ${COLOR.black2};
`
