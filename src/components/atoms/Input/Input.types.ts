import { SpaceProps } from 'styled-system'
import { OutlinedTextFieldProps } from '@material-ui/core/TextField'

export interface IInputProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  size?: 'small' | 'medium'
  variant?: 'standard' | 'outlined' | 'filled'
}

export declare type BaseInputProps = SpaceProps & IInputProps
