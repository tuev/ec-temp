import { useState, useCallback } from 'react'
import { ProductCartHook } from './ProductCart.types'

const useProductCart: ProductCartHook = () => {
  const [isCartOpen, toggleCart] = useState<boolean>(false)
  const hideCart = useCallback(() => toggleCart(false), [])
  const showCart = useCallback(() => toggleCart(true), [])

  const cartHanlder = {
    hide: hideCart,
    show: showCart,
  }
  return [isCartOpen, cartHanlder]
}

export default useProductCart
