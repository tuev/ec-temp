import { SpaceProps } from 'styled-system'
export interface INumberCompProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data?: number
  color?: 'primary' | 'white'
  children?: null
}

export type BaseNumberProps = INumberCompProps | SpaceProps

export type NumberButton = Omit<INumberCompProps, 'data'>
