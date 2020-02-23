import React, { FC } from 'react'
import { AppInput, theme } from './Input.styled'
import { BaseInputProps } from './Input.types'
import { ThemeProvider } from '@material-ui/core/styles'

const Input: FC<BaseInputProps> = (props: BaseInputProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AppInput
        color="primary"
        {...props}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </ThemeProvider>
  )
}

export default Input
