import { SpaceProps } from 'styled-system'

export type PriceHandleChange = (
  event: React.ChangeEvent<{}>,
  value: number | number[]
) => void

export type PriceValue = [number, number]

export interface IPriceSelect {
  values?: PriceValue
  onChange?: PriceHandleChange
  min?: number
  max?: number
}

export type PriceBasicProps = SpaceProps & IPriceSelect
