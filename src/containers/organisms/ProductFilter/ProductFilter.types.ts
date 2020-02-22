import {
  CHANGE_COLOR,
  CHANGE_BRAND,
  CHANGE_PRICE,
  CHANGE_SIZE,
  CLEAR_FILTER,
} from './ProductFilter.constants'
import { ColorType } from 'theme/colors'
import { IBrandValues } from 'components/molecules/BrandSelect/BrandSelect.types'
import { SIZE_PARAMS } from 'components/molecules/SizeSelect/SizeSelect.types'
import { PriceValue } from 'components/molecules/PriceSelect/PriceSelect.types'

export interface IProductFilterOptions {
  color: ColorType[]
  size: SIZE_PARAMS[]
  price: PriceValue
  brand: IBrandValues
}

export interface IProductFilterValue {
  color: ColorType[]
  size: SIZE_PARAMS[]
  price: PriceValue
  brand: IBrandValues
}
export type ProductFilterHandle = (filter: IProductFilterValue) => unknown

export interface IProductProps {
  value?: IProductFilterValue
  onChange?: ProductFilterHandle
  applyFilter?: ProductFilterHandle
}
export type ProductFilterProps = IProductProps

export interface IColorAction {
  type: typeof CHANGE_COLOR
  payload: ColorType[]
}

export interface ISizeAction {
  type: typeof CHANGE_SIZE
  payload: SIZE_PARAMS[]
}

export interface IPriceAction {
  type: typeof CHANGE_PRICE
  payload: PriceValue
}

export interface IBrandAction {
  type: typeof CHANGE_BRAND
  payload: IBrandValues
}

export interface IClearFilterAction {
  type: typeof CLEAR_FILTER
  payload?: IProductFilterValue
}

export type ProductFilterAction =
  | IColorAction
  | ISizeAction
  | IPriceAction
  | IBrandAction
  | IClearFilterAction

export type ProductFilterReducer = (
  initState: IProductFilterValue,
  action: ProductFilterAction
) => IProductFilterValue

export type ClearProductFilter = () => void

export interface IProdutFilterChange {
  color: (color: ColorType[]) => void
  size: (size: SIZE_PARAMS[]) => void
  price: (price: PriceValue) => void
  brand: (brand: IBrandValues) => void
}
export type ProductFilterHookOutput<T> = [
  T,
  IProdutFilterChange,
  ClearProductFilter
]
export type ProductFilterHook = (
  value: IProductFilterValue,
  onEffectCallback?: ProductFilterHandle,
  defaultValue?: IProductFilterValue
) => ProductFilterHookOutput<IProductFilterValue>
