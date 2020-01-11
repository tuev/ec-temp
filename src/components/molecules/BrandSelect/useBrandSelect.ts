import { useCallback, useState, useEffect } from 'react'
import { IBrandValues, UseBrandSelect } from './BrandSelect.types'
import { get } from 'lodash'

const useBrandSelect: UseBrandSelect = (
  initValues: IBrandValues,
  onEffectCallback
) => {
  const [checkedValue, toggleCheck] = useState<IBrandValues>(initValues)
  const handleChange = useCallback(
    (name: string | number) => (
      event: React.ChangeEvent<HTMLInputElement>
    ): unknown =>
      toggleCheck({
        ...checkedValue,
        [name]: {
          ...checkedValue[name],
          value: !!get(event, 'target.checked', false),
        },
      }),
    [checkedValue]
  )
  const setBrandSelect = useCallback(
    values => {
      toggleCheck(values)
    },
    [toggleCheck]
  )

  useEffect(() => {
    if (onEffectCallback) {
      onEffectCallback(checkedValue)
    }
  }, [checkedValue, onEffectCallback, setBrandSelect])

  useEffect(() => {
    setBrandSelect(initValues)
  }, [initValues, setBrandSelect])

  return [checkedValue, handleChange]
}

export default useBrandSelect
