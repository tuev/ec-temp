import {
  GridProps,
  SpaceProps,
  BorderProps,
  BackgroundProps,
  PositionProps,
  LayoutProps,
} from 'styled-system'

export type GridLayoutProp = GridProps &
  SpaceProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  LayoutProps
