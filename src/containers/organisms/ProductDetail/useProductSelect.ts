import { useCallback, useReducer, useMemo } from 'react'

import * as ACTION_TYPE from './ProductDetail.constants'
import { SIZE_PARAMS } from 'components/molecules/SizeSelect/SizeSelect.types'

import { ColorType } from 'theme/colors'
import { ProductSelectHook, ProductSelectReducer } from './ProductDetail.types'

export const reducer: ProductSelectReducer = (initState, action) => {
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
    case ACTION_TYPE.CHANGE_QUANTITY:
      return {
        ...initState,
        quantity: action.payload,
      }
    default:
      return initState
  }
}

const useProductSelect: ProductSelectHook = initState => {
  const [options, dispatch] = useReducer(reducer, initState)
  const onColorChange = useCallback(
    (color: ColorType) => dispatch({ type: 'CHANGE_COLOR', payload: color }),
    []
  )
  const onSizeChange = useCallback(
    (size: SIZE_PARAMS) =>
      dispatch({ type: ACTION_TYPE.CHANGE_SIZE, payload: size }),
    []
  )
  const onQuantityChange = useCallback(
    (quantity: number) =>
      dispatch({ type: ACTION_TYPE.CHANGE_QUANTITY, payload: quantity }),
    []
  )

  const onOptionsChange = useMemo(
    () => ({
      color: onColorChange,
      quantity: onQuantityChange,
      size: onSizeChange,
    }),
    [onColorChange, onQuantityChange, onSizeChange]
  )

  return [options, onOptionsChange]
}

export default useProductSelect
