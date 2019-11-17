import { colorType } from 'theme/colors'
import { SpaceProps } from 'styled-system'
import { RadioProps } from '@material-ui/core/Radio'

import { Theme } from '@material-ui/core/styles''
export interface IRadioProps extends RadioProps {
  customColor?: colorType
  variant?: 'inner' | 'outer'
}

export type GetTheme = (color?: colorType) => Theme

export declare type BaseRadioProps = IRadioProps & SpaceProps
