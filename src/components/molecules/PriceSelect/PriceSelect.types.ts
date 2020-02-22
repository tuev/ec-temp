import { SpaceProps } from 'styled-system'
export type PriceValue = number | number[]
export type PriceHandleChange = (
  event: React.ChangeEvent<{}> | null,
  value: PriceValue
) => void

export type OnPriceSelectChange = (value: PriceValue) => void

export interface IPriceSelect {
  values?: PriceValue
  onChange?: OnPriceSelectChange
  min?: number
  max?: number
}

export type PriceBasicProps = SpaceProps & IPriceSelect

export type IPriceHookOutput = [PriceValue, PriceHandleChange]

export type PriceHook = (
  initValue?: PriceValue,
  onEffectCallback?: OnPriceSelectChange
) => IPriceHookOutput
