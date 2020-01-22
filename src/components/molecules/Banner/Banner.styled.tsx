/**
 *
 * Styled for Banner
 *
 */

import styled from 'styled-components'
import { prop } from 'styled-tools'

export const BannerWrapper = styled.div<{ background: string }>`
  height: calc(100vh - 80px);
  width: 100vw;
  background-image: url(${prop('background')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 64px 128px;
`
