import {
  CHANGE_COLOR,
  CHANGE_SIZE,
  CHANGE_QUANTITY,
} from './ProductDetail.constants'
import { SIZE_PARAMS } from 'components/molecules/SizeSelect/SizeSelect.types'
import * as ProductItemInfoType from 'components/molecules/ProductItemInfo/ProductInfo.types'
import * as ProductItemBuyType from 'components/molecules/ProductItemBuy/ProductItemBuy.types'
import * as BreadcrumbType from 'components/atoms/Breadcrumbs/Breadcrumbs.types'
import { ColorType } from 'theme/colors'

export interface IProductDetailProps {
  breadcrumbLinks: BreadcrumbType.IBreadCrumbItem[]
  activeBreadcrumb: string
  images: string[]
  rating: number
  quantity: number
  colors: ColorType[]
  sizes: SIZE_PARAMS[]
  name: string
  price: string
  id: string
}

export interface IProductOptions {
  color: ColorType
  size: SIZE_PARAMS
  quantity: number
}

export interface IColorAction {
  type: typeof CHANGE_COLOR
  payload: ColorType
}

export interface ISizeAction {
  type: typeof CHANGE_SIZE
  payload: SIZE_PARAMS
}

export interface IQuantityAction {
  type: typeof CHANGE_QUANTITY
  payload: number
}

export type ProductSelectAction = IColorAction | ISizeAction | IQuantityAction

export type ProductSelectReducer = (
  optionValue: IProductOptions,
  action: ProductSelectAction
) => IProductOptions

export interface IHandleOptionsChange {
  color: (colorValue: ColorType) => void
  size: (sizeValue: SIZE_PARAMS) => void
  quantity: (quantityValue: number) => void
}

export type ProductSelectHook = (
  initValue: IProductOptions
) => [IProductOptions, IHandleOptionsChange]

export type HandleBuyProduct = ({
  id,
  color,
  size,
  quantity,
}: { id: string } & IProductOptions) => unknown

export type ProductDetailProps = IProductDetailProps & {
  handleBuy?: HandleBuyProduct
}
