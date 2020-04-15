import React, { FC, useMemo } from 'react'
import { AppNumberComp } from './NumberComp.styled'
import { BaseNumberProps } from './NumberComp.types'

const getDataNumber: (data: number) => number = (data) =>
  data < 0 ? 0 : data > 99 ? 99 : data

const NumberComp: FC<BaseNumberProps> = (props: BaseNumberProps) => {
  const { data = 0, ...rest } = props
  const dataNumber: number = useMemo(() => getDataNumber(data), [data])
  return (
    <AppNumberComp color="primary" {...rest}>
      {dataNumber}
    </AppNumberComp>
  )
}
export default NumberComp
