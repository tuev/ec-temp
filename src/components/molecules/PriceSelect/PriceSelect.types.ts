import { SpaceProps } from 'styled-system'
// import { ChangeEvent, FormEvent } from 'react'
export type PriceValue = number | number[]

/** TODO: Cheat:
 *  Bug of material-ui type
 *  https://github.com/mui-org/material-ui/issues/20191
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PriceHandleChange = any

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
