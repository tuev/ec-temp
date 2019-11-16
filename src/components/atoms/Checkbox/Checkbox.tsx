import React, { FC } from 'react'
import { AppCheckbox, theme } from './Checkbox.styled'
import { BaseCheckboxProps } from './Checkbox.types'
import { ThemeProvider } from '@material-ui/core/styles'

const Checkbox: FC<BaseCheckboxProps> = (props: BaseCheckboxProps) => (
  <ThemeProvider theme={theme}>
    <AppCheckbox color="primary" {...props} />
  </ThemeProvider>
)

export default Checkbox
