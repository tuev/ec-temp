export type HandleQuantityChange = (value: number) => unknown

export interface IQuantityInput {
  value?: number
  onChange?: HandleQuantityChange
}

export type OnQuantityChange = (e: React.ChangeEvent<{}>) => unknown

export interface IQuantityHookHandle {
  increase: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  decrease: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export type QuantityHook = (
  value?: number,
  onChange?: HandleQuantityChange
) => [number, OnQuantityChange, IQuantityHookHandle]

export type QuantityProps = IQuantityInput
