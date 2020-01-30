/**
 *
 * Styled for Logo
 *
 */

import styled from 'styled-components'
import { prop } from 'styled-tools'

export const LogoImg = styled.div<{ img: string; size?: string | number }>`
  background-image: url(${prop('img')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: ${prop('size', '40px')};
  height: ${prop('size', '40px')};
`
