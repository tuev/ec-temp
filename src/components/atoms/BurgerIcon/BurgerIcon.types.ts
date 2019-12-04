import { SpaceProps } from 'styled-system'
import { ColorType } from 'theme/colors'

export interface IBurgerIcon {
  open?: boolean
  size?: number | string
  color?: ColorType
}

export declare type BaseBurgerIconProps = IBurgerIcon &
  SpaceProps &
  React.HTMLAttributes<HTMLButtonElement>
