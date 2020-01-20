import { SpaceProps } from 'styled-system'
import { ColorType } from 'theme/colors'

export interface IBurgerIcon {
  open?: boolean
  size?: number | string
  color?: ColorType
  handleOpen?: (openStatus: boolean) => void
}

export declare type BaseBurgerIconProps = IBurgerIcon &
  SpaceProps &
  React.HTMLAttributes<HTMLButtonElement>
