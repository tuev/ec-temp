import React, { FC } from 'react'
import { AppRadio, theme } from './Radio.styled'
import { BaseRadioProps } from './Radio.types'
import { ThemeProvider } from '@material-ui/core/styles'

const Radio: FC<BaseRadioProps> = (props: BaseRadioProps) => (
  <ThemeProvider theme={theme}>
    <AppRadio color="primary" {...props} />
  </ThemeProvider>
)

export default Radio
