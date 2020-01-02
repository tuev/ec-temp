import { LayoutProps } from 'styled-system'

export type SIZE_PARAMS = 'M' | 'S' | 'XS' | 'L' | 'XL' | 'XXL' | 'XXXL'

type HandleOnChange = (size: SIZE_PARAMS) => unknown

export interface ISizeSelect {
  sizes?: SIZE_PARAMS[]
  value: SIZE_PARAMS
  onChange?: HandleOnChange
  type?: 'radio' | 'select'
}

export type BasicSizeSelectProps = LayoutProps & ISizeSelect
