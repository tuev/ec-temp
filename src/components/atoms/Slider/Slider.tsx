import React, { FC } from 'react'
import { AppSlider, theme } from './Slider.styled'
import { BaseSliderProps, ValueLabelProps } from './Slider.types'
import { ThemeProvider } from '@material-ui/core/styles'
import { isNumber, isArray } from 'lodash'

export const valueText: (value?: number) => string = (value) =>
  value === undefined ? '' : `${value}`

export const ValueLabel: FC<ValueLabelProps> = (props: ValueLabelProps) => {
  const { showlabel, value } = props
  if (!showlabel) {
    return <div />
  }
  if (isNumber(value)) {
    return (
      <div>
        <span>{value}</span>
      </div>
    )
  }
  if (isArray(value)) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {value.map((item, key) => (
          <span key={key}>{item}</span>
        ))}
      </div>
    )
  }
  return <div />
}

const Slider: FC<BaseSliderProps> = (props: BaseSliderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AppSlider
        color="primary"
        getAriaValueText={valueText}
        valueLabelDisplay="auto"
        {...props}
      />
      <ValueLabel showlabel={props.showlabel} value={props.value} />
    </ThemeProvider>
  )
}

export default Slider
