import {
  CART_LIST_CHANGE_QUANTITY,
  CART_LIST_REMOVE_ITEM,
} from './CartList.constants'
import { useReducer, useCallback, useMemo, useEffect } from 'react'
import { CartListReducer, CartListHook, ICartItem } from './CartList.types'
import { get } from 'lodash'
import { flow, path, find } from 'lodash/fp'

export const reducer: CartListReducer = (initState, action) => {
  switch (action.type) {
    case CART_LIST_CHANGE_QUANTITY:
      return initState.map((item) =>
        item.id === get(action, 'payload.id')
          ? { ...item, quantity: get(action, 'payload.quantity') }
          : item
      )
    case CART_LIST_REMOVE_ITEM:
      return initState.filter((item) => item.id !== action.payload)
    default:
      return initState
  }
}

const useCartListHandler: CartListHook = (initValue, onCartListChange) => {
  const [state, dispatch] = useReducer(reducer, initValue)

  const handleQuantityChange = useCallback(
    (id: string) => (quantity: number): void => {
      const currentQuantity = flow(
        find((item: ICartItem) => item.id === id),
        path('quantity')
      )(state)
      if (quantity !== currentQuantity) {
        dispatch({
          type: CART_LIST_CHANGE_QUANTITY,
          payload: { id, quantity },
        })
      }
    },
    [state]
  )

  const countItem = useMemo(() => state.length, [state])

  const handleRemoveCartItem = useCallback(
    (id) => (): void => {
      dispatch({ type: CART_LIST_REMOVE_ITEM, payload: id })
    },
    []
  )

  useEffect(() => {
    if (onCartListChange) {
      onCartListChange(state)
    }
  }, [onCartListChange, state])

  return [state, countItem, handleQuantityChange, handleRemoveCartItem]
}

export default useCartListHandler
