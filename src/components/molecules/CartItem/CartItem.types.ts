import { SIZE_PARAMS } from 'components/molecules/SizeSelect/SizeSelect.types'

export type HandleQuantityChange = (quantity: number, id: string) => unknown

export type HandleRemoveCartItem = (id: string) => unknown

export interface ICartItem {
  name: string
  id: string
  quantity: number
  size: SIZE_PARAMS
  image?: string
  price: number
}

export type CartItemProps = ICartItem & {
  onQuantityChange?: HandleQuantityChange
  onRemoveCartItem?: HandleRemoveCartItem
}
