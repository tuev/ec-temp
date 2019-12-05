import { ColorType } from 'theme/colors'
import { SpaceProps } from 'styled-system'
import { TypographyProps } from '@material-ui/core/Typography'

export type TypographyColorType =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error'
  | ColorType

export interface ITypography extends TypographyProps {
  customvariant?:
    | 'header1'
    | 'header2'
    | 'header3'
    | 'topbar'
    | 'body1'
    | 'body2'
  // customcolor?: string
}

// export type GetColor = (color?: string) => string

export declare type BaseTypographyProps = SpaceProps | ITypography
