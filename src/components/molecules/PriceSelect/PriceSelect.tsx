import React, { FC } from 'react'
import Slider from 'components/atoms/Slider'
import { PriceBasicProps } from './PriceSelect.types'

export const defaultMethod = () => true

const PriceSelect: FC<PriceBasicProps> = (props: PriceBasicProps) => {
  const {
    values = [5, 90],
    onChange = defaultMethod,
    min = 0,
    max = 100,
  } = props

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
