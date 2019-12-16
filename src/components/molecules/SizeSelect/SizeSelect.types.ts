import { LayoutProps } from 'styled-system'

type SIZE_PARAMS = 'M' | 'S' | 'XS' | 'L' | 'XL' | 'XXL' | 'XXXL'

type HandleOnChange = (size: string) => unknown

export interface ISizeSelect {
  sizes?: SIZE_PARAMS[]
  value?: SIZE_PARAMS
  onChange?: HandleOnChange
}

export type BasicSizeSelectProps = LayoutProps & ISizeSelect
