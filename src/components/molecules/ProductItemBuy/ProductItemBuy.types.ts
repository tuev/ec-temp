import { ColorType } from 'theme/colors'
import { SIZE_PARAMS } from 'components/molecules/SizeSelect/SizeSelect.types'
interface IProductInfo {
  id: string
  name: string
  price: string
}

interface IProductColors {
  colors: ColorType[]
}

interface IProductSize {
  sizes: SIZE_PARAMS[]
}

export interface IProductImage {
  image: string
}

export interface IProductItemBuyState {
  color: ColorType
  size: SIZE_PARAMS
}

export interface IActionChangeColor {
  type: 'CHANGE_COLOR'
  value: ColorType
}

export interface IActionChangeSize {
  type: 'CHANGE_SIZE'
  value: SIZE_PARAMS
}

export type ReducerType = (
  state: IProductItemBuyState,
  action: IActionChangeColor | IActionChangeSize
) => IProductItemBuyState

export type HandleBuyProduct = ({
  id,
  color,
  size,
}: { id: string } & IProductItemBuyState) => unknown

export type ProductItemBuyProps = IProductInfo &
  IProductColors &
  IProductSize &
  IProductImage & { handleBuy?: HandleBuyProduct }
