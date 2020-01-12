import { useState, useCallback, useEffect } from 'react'
import { PriceValue, PriceHook } from './PriceSelect.types'

const usePriceSelect: PriceHook = (initValue = [5, 90], onEffectCallback) => {
  const [priceValue, onPriceValueChange] = useState<PriceValue>(initValue)
  const handlePriceChange = useCallback((e, value) => {
    onPriceValueChange(value)
  }, [])

  useEffect(() => {
    if (onEffectCallback && priceValue) {
      onEffectCallback(priceValue)
      handlePriceChange(null, priceValue)
    }
  }, [handlePriceChange, onEffectCallback, priceValue])

  useEffect(() => {
    handlePriceChange(null, initValue)
  }, [handlePriceChange, initValue])

  return [priceValue, handlePriceChange]
}

export default usePriceSelect
