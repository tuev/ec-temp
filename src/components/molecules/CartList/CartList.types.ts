import { SIZE_PARAMS } from 'components/molecules/SizeSelect/SizeSelect.types'
import {
  CART_LIST_CHANGE_QUANTITY,
  CART_LIST_REMOVE_ITEM,
} from './CartList.constants'

export type HandleCartItemChange = (items: CartItemProps[]) => unknown

export type HandleRemoveCartItem = (id: string) => unknown

export interface ICartItem {
  name: string
  id: string
  quantity: number
  size: SIZE_PARAMS
  image?: string
  price: number
}

export type CartItemProps = ICartItem

export interface ICartList {
  data: CartItemProps[]
}

export type CartListProps = ICartList & {
  onCartItemChange?: HandleCartItemChange
  onRemoveCartItem?: HandleRemoveCartItem
}

export interface ICartListQuantityChange {
  type: typeof CART_LIST_CHANGE_QUANTITY
  payload: {
    quantity: number
    id: string
  }
}

export interface ICartListRemoveItem {
  type: typeof CART_LIST_REMOVE_ITEM
  payload: string
}

export type CartListReducer = (
  initState: ICartItem[],
  action: ICartListQuantityChange | ICartListRemoveItem
) => ICartItem[]

export type CartListHook = (
  initValue: ICartItem[],
  onCartListChange?: HandleCartItemChange
) => [
  ICartItem[],
  number,
  (id: string) => (quantity: number) => void,
  (id: string) => () => void
]
