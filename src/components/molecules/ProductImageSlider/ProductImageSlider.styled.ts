/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO : check type for react-spring after 9.0 released

import { COLOR } from 'theme/colors'
/**
 *
 * Styled for ProductImageSlider
 *
 */

import styled from 'styled-components'
import { prop, ifProp } from 'styled-tools'
import { animated } from 'react-spring'

export const ImageSliderItem = styled.div<{ background: string }>`
  background-image: url(${prop('background')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 320px;
  height: 320px;
`

export const ImageSliderItemWrapper = styled(animated.div).attrs(
  ({ transform }: { transform: string }) => ({
    style: {
      transform,
    },
  })
)<{
  transform: any
}>`
  cursor: pointer;
  will-change: transform;
  position: absolute;
  height: 100%;
  width: 100%;
`

export const ImageSliderWrapper = styled.div`
  width: 320px;
  height: 320px;
  position: relative;
  overflow: hidden;
`

export const ThumbnailItem = styled.div<{
  background: string
  active: boolean
}>`
  background-image: url(${prop('background')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 72px;
  height: 72px;
  border: ${ifProp('active', `1px solid ${COLOR.primary}`)};
  position: relative;
  cursor: pointer;
`
