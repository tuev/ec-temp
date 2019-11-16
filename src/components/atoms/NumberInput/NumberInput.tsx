import React, { FC } from 'react'
import { AppNumberInput, theme } from './NumberInput.styled'
import { BaseNumberInputProps } from './NumberInput.types'
import { ThemeProvider } from '@material-ui/core/styles'

const NumberInput: FC<BaseNumberInputProps> = (props: BaseNumberInputProps) => (
  <ThemeProvider theme={theme}>
    <AppNumberInput
      color="primary"
      {...props}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  </ThemeProvider>
)

export default NumberInput
