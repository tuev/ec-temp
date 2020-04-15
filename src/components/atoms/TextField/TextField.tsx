/**
 *
 * TextField
 *
 */

import React, { FC } from 'react'
import { TextField as InputText, ThemeProvider } from '@material-ui/core'
import { AppTextField } from './TextField.types'
import { theme } from './TextField.styled'

const TextField: FC<AppTextField> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <InputText {...props} />
    </ThemeProvider>
  )
}

export default TextField
