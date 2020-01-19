import { useState, useCallback, useEffect } from 'react'
import { get } from 'lodash'
import { QuantityHook } from './QuantityInput.types'

const useQuantityHook: QuantityHook = (initValue, onChange) => {
  const [quantity, onQuantityChange] = useState<number>(initValue || 0)
  const handleQuantityChange = useCallback(e => {
    const valueOnchange = get(e, 'target.value', 0)
    onQuantityChange(Math.max(valueOnchange, 0))
  }, [])

  useEffect(() => {
    if (onChange) {
      onChange(quantity)
    }
  }, [onChange, quantity])

  const increase = useCallback(() => onQuantityChange(+quantity + 1), [
    quantity,
  ])
  const decrease = useCallback(
    () => onQuantityChange(Math.max(+quantity - 1, 0)),
    [quantity]
  )
  return [quantity, handleQuantityChange, { increase, decrease }]
}

export default useQuantityHook
