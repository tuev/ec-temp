/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO : check type for react-spring after 9.0 released
/**
 *
 * Styled for ProductItem
 *
 */

import styled from 'styled-components'
import { prop } from 'styled-tools'
import { animated } from 'react-spring'

export const ProductItemCardWrapper = styled.div`
  position: relative;
  height: 335px;
  width: 100%;
`
export const ProductItemCard = styled(animated.div).attrs(
  ({ opacity, transform }: { transform: string; opacity: string }) => ({
    style: {
      opacity,
      transform,
    },
  })
)<{
  transform: any
  opacity: any
}>`
  cursor: pointer;
  will-change: transform, opacity;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: ${prop('z-index')};
  position: absolute;
`
