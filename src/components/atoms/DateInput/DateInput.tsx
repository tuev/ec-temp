import React, { FC } from 'react'
import { AppDateInput, theme } from './DateInput.styled'
import { BaseDateInputProps } from './DateInput.types'
import { ThemeProvider } from '@material-ui/core/styles'

const DateInput: FC<BaseDateInputProps> = (props: BaseDateInputProps) => (
  <ThemeProvider theme={theme}>
    <AppDateInput color="primary" {...props} type="date" variant="outlined" />
  </ThemeProvider>
)

export default DateInput
