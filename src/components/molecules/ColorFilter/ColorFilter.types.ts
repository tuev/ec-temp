import { SpaceProps, FlexProps } from 'styled-system'
import { ColorType } from 'theme/colors'

type HandleOnChange = (color: ColorType) => unknown

export interface IColorFilter {
  colors?: ColorType[]
  value?: ColorType
  onChange?: HandleOnChange
}

export type ColorFilterType = IColorFilter & SpaceProps & FlexProps
