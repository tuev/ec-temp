import React, { FC, useMemo, useCallback } from 'react'
import { AppRadio } from './Radio.styled'
import { BaseRadioProps } from './Radio.types'
import { ThemeProvider, createMuiTheme, Theme } from '@material-ui/core/styles'
import { colorType, colorPalettes } from 'theme/colors'

const getTheme: (color?: colorType) => Theme = (color = 'primary') =>
  createMuiTheme({
    palette: {
      primary: colorPalettes[color],
    },
  })

const Radio: FC<BaseRadioProps> = (props: BaseRadioProps) => {
  const { customColor = 'primary', ...rest } = props
  const theme = getTheme(customColor)

  const getThemeCallback = useCallback(
    (theme: Theme) =>
      createMuiTheme({
        ...theme,
        palette: {
          ...theme.palette,
          primary: colorPalettes[customColor],
        },
      }),
    [customColor]
  )

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={getThemeCallback}>
        <AppRadio {...rest} color="primary" />
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default Radio
