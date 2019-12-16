import React, { FC } from 'react'
import Slider from 'components/atoms/Slider'
import { PriceBasicProps } from './PriceSelect.types'

const PriceSelect: FC<PriceBasicProps> = (props: PriceBasicProps) => {
  const { values = [5, 90], onChange, min = 0, max = 100 } = props

  return (
    <Slider
      showlabel={1}
      value={values}
      onChange={onChange}
      min={min}
      max={max}
    />
  )
}

export default PriceSelect
