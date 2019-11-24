import { ColorType, ColorValues } from 'theme/colors'
import { SpaceProps } from 'styled-system'
import { RadioProps } from '@material-ui/core/Radio'

import { Theme } from '@material-ui/core/styles'
export interface IRadioProps extends RadioProps {
  customcolor?: ColorType
  variant?: 'inner' | 'outer'
}

export type GetTheme = (color?: ColorType) => Theme
export type getColor = (props: BaseRadioProps) => ColorValues

export declare type BaseRadioProps = IRadioProps & SpaceProps
