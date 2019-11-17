import React, { FC, useCallback, useMemo } from 'react'
import { AppRadio } from './Radio.styled'
import { BaseRadioProps, GetTheme } from './Radio.types'
import { ThemeProvider, createMuiTheme, Theme } from '@material-ui/core/styles'
import { colorPalettes } from 'theme/colors'

const getTheme: GetTheme = (color = 'primary') =>
  createMuiTheme({
    palette: {
      primary: colorPalettes[color],
    },
  })

const Radio: FC<BaseRadioProps> = (props: BaseRadioProps) => {
  const { customColor = 'primary', ...rest } = props
  const theme = useMemo(() => getTheme(customColor), [customColor])

  // TODO:  SHOULD HAVE TYPE FOR CURRYING
  const getThemeCallback = useCallback(
    (currentTheme: Theme): Theme =>
      createMuiTheme({
        ...currentTheme,
        palette: {
          ...currentTheme.palette,
          primary: colorPalettes[customColor],
        },
      }),
    [customColor]
  )
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={getThemeCallback}>
        <AppRadio
          variant="inner"
          color="primary"
          customColor={customColor}
          {...rest}
        />
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default Radio
