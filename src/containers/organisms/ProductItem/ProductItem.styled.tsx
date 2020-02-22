/**
 *
 * Styled for ProductItem
 *
 */

import styled from 'styled-components'
import { prop } from 'styled-tools'
import { animated, SpringValue } from 'react-spring'

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
  transform: SpringValue<string>
  opacity: SpringValue<number>
}>`
  cursor: pointer;
  will-change: transform, opacity;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: ${prop('z-index')};
  position: absolute;
`
