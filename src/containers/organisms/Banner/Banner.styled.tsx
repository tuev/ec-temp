/**
 *
 * Styled for Banner
 *
 */

import styled from 'styled-components'
import { prop } from 'styled-tools'

export const BannerWrapper = styled.div<{ background: string }>`
  height: 440px;
  width: 100%;
  background-image: url(${prop('background')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
