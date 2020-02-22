import React, { FC } from 'react'
import Slider from 'components/atoms/Slider'
import { PriceBasicProps } from './PriceSelect.types'
import usePriceSelect from './usePriceHook'

const PriceSelect: FC<PriceBasicProps> = (props: PriceBasicProps) => {
  const { values, onChange, min = 0, max = 100 }: PriceBasicProps = props
  const [priceValue, handleValueChange] = usePriceSelect(values, onChange)

  return (
    <Slider
      showlabel={1}
      value={priceValue}
      onChange={handleValueChange}
      min={min}
      max={max}
    />
  )
}

export default PriceSelect
