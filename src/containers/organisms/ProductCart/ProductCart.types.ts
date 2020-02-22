import { ICartItem } from 'components/molecules/CartList/CartList.types'

export type ProductCartProps = {
  data?: ICartItem[]
  onBuy?: (cartList: ICartItem[]) => unknown
}

export interface ICartHandler {
  show: () => void
  hide: () => void
}

export type ProductCartHook = () => [boolean, ICartHandler]
