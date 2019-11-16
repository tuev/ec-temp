import React, { FC } from 'react'
import { AppButton, theme } from './Button.styled'
import { BaseButtonProps } from './Button.types'
import { ThemeProvider } from '@material-ui/core/styles'

const Button: FC<BaseButtonProps> = (props: BaseButtonProps) => (
  <ThemeProvider theme={theme}>
    <AppButton variant="contained" color="primary" {...props} />
  </ThemeProvider>
)

export default Button
