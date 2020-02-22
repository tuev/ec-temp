import { useCallback, useReducer, useMemo, useEffect } from 'react'
import { get } from 'lodash'
import * as ACTION_TYPE from './ProductFilter.constants'
import { SIZE_PARAMS } from 'components/molecules/SizeSelect/SizeSelect.types'
import { PriceValue } from 'components/molecules/PriceSelect/PriceSelect.types'
import { IBrandValues } from 'components/molecules/BrandSelect/BrandSelect.types'
import { ProductFilterReducer, ProductFilterHook } from './ProductFilter.types'
import { ColorType } from 'theme/colors'

export const reducer: ProductFilterReducer = (initState, action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_COLOR:
      return {
        ...initState,
        color: action.payload,
      }
    case ACTION_TYPE.CHANGE_SIZE:
      return {
        ...initState,
        size: action.payload,
      }
    case ACTION_TYPE.CHANGE_PRICE:
      return {
        ...initState,
        price: action.payload,
      }
    case ACTION_TYPE.CHANGE_BRAND:
      return {
        ...initState,
        brand: action.payload,
      }
    case ACTION_TYPE.CLEAR_FILTER: {
      const filter = get(action, 'payload', {})
      return {
        ...initState,
        ...filter,
      }
    }
    default:
      return initState
  }
}

const useProductFilter: ProductFilterHook = (
  iniState,
  onEffectCallback,
  defaultValue
) => {
  const initValue = iniState
  const [filter, dispatch] = useReducer(reducer, initValue)
  const onColorChange = useCallback(
    (color: ColorType[]) => dispatch({ type: 'CHANGE_COLOR', payload: color }),
    []
  )
  const onSizeChange = useCallback(
    (size: SIZE_PARAMS[]) =>
      dispatch({ type: ACTION_TYPE.CHANGE_SIZE, payload: size }),
    []
  )
  const onPriceChange = useCallback(
    (price: PriceValue) =>
      dispatch({ type: ACTION_TYPE.CHANGE_PRICE, payload: price }),
    []
  )
  const onBrandChange = useCallback(
    (brandValue: IBrandValues) =>
      dispatch({ type: ACTION_TYPE.CHANGE_BRAND, payload: brandValue }),
    []
  )

  const onClearFilter = useCallback(
    () => dispatch({ type: ACTION_TYPE.CLEAR_FILTER, payload: defaultValue }),
    [defaultValue]
  )

  // todo: Base on bussiness rule of design
  // - product list will re-render when changing filter
  // or product list only re-render when clicking apply filter btn
  useEffect(() => {
    if (onEffectCallback) {
      onEffectCallback(filter)
    }
  }, [filter, onEffectCallback])

  const onFilterChange = useMemo(
    () => ({
      brand: onBrandChange,
      color: onColorChange,
      price: onPriceChange,
      size: onSizeChange,
    }),
    [onBrandChange, onColorChange, onPriceChange, onSizeChange]
  )
  return [filter, onFilterChange, onClearFilter]
}

export default useProductFilter
