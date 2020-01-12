import { SpaceProps, FlexProps } from 'styled-system'
import { ColorType } from 'theme/colors'

type HandleOnChange = (color: ColorType) => void

export interface IColorSelect {
  colors: ColorType[]
  value: ColorType
  onChange?: HandleOnChange
}

export type ColorSelectType = IColorSelect & SpaceProps & FlexProps
