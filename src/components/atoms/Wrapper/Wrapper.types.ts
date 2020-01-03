import {
  SpaceProps,
  DisplayProps,
  BorderProps,
  BackgroundProps,
  PositionProps,
  FlexboxProps,
  LayoutProps,
} from 'styled-system'

export type WrapperProps = SpaceProps &
  DisplayProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  FlexboxProps & { children?: React.ReactNode } & LayoutProps
