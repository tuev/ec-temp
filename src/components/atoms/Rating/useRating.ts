import { useState, useCallback, useEffect } from 'react'
import { RatingHook } from './Rating.types'

const useRating: RatingHook = (rating, onRatingChange) => {
  const [value, onValueChange] = useState<number>(rating)

  const handleValueChange = useCallback(
    (event: React.ChangeEvent<{}>, newValue: number | null): void => {
      const valueRating = newValue || value
      onValueChange(valueRating)
    },
    [value]
  )

  useEffect(() => {
    if (onRatingChange) {
      onRatingChange(value)
    }
  }, [onRatingChange, value])

  return [value, handleValueChange]
}

export default useRating
