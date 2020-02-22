import { SpaceProps } from 'styled-system'
import { OutlinedTextFieldProps } from '@material-ui/core/TextField'

export interface IDateInputProps
  extends Omit<OutlinedTextFieldProps, 'variant'> {
  size?: 'small' | 'medium'
  variant?: 'standard' | 'outlined' | 'filled'
}

export declare type BaseDateInputProps = SpaceProps & IDateInputProps
