import { SpaceProps } from 'styled-system'
import { OutlinedTextFieldProps } from '@material-ui/core/TextField'

export interface INumberInputProps
  extends Omit<OutlinedTextFieldProps, 'variant'> {
  size?: 'small' | 'medium'
  variant?: 'standard' | 'outlined' | 'filled'
}

export declare type BaseNumberInputProps = SpaceProps & INumberInputProps
