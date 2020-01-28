import {
  SpaceProps,
  DisplayProps,
  BorderProps,
  BackgroundProps,
  PositionProps,
  FlexboxProps,
  LayoutProps,
} from 'styled-system'

import { ReactHTMLElement } from 'react'

export type WrapperProps = SpaceProps &
  DisplayProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  FlexboxProps & { children?: React.ReactNode } & LayoutProps &
  React.HTMLProps<HTMLDivElement>
