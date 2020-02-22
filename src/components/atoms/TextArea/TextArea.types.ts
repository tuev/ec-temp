import { SpaceProps } from 'styled-system'
import { TextFieldProps } from '@material-ui/core/TextField'

export interface ITextAreaProps extends Omit<TextFieldProps, 'variant'> {
  size?: 'small' | 'medium'
  variant?: 'outlined'
}

export declare type BaseTextAreaProps = SpaceProps & ITextAreaProps
